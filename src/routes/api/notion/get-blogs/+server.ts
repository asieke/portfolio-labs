import dotenv from 'dotenv';
dotenv.config();

const { PL_NOTION_KEY } = process.env;
import { supabaseAdmin } from '$lib/clients/supabase';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import type { Blog } from '$types/blog';

// GET request handler to fetch blogs uses Key auth
export const GET = async ({ request }: { request: Request }) => {
	const url = new URL(request.url);
	const KEY = url.searchParams.get('key');

	if (KEY !== PL_NOTION_KEY) {
		return new Response(JSON.stringify({ error: 'Not Authenticated' }), { status: 401 });
	}

	const blogs = await getNotionBlogsAndUpdate();
	return new Response(JSON.stringify({ blogs }));
};

// POST request handler to fetch blogs uses either Key AUTH or session Auth
export const POST = async ({ request, locals }: { request: Request; locals: App.Locals }) => {
	const session = await locals.getSession();
	const { headers } = request;
	const KEY = headers.get('Authorization');

	//Needs to have either KEY OR Session, else not authenticated
	if (!(KEY === PL_NOTION_KEY || session?.access_token)) {
		return new Response(JSON.stringify({ error: 'Not Authenticated' }), { status: 401 });
	}

	const blogs = await getNotionBlogsAndUpdate();
	return new Response(JSON.stringify({ blogs }));
};

// Fetches blogs from notion
// returns a blog object with all blogs
// upserts into supabase
const getNotionBlogsAndUpdate = async () => {
	const notion = new Client({
		auth: process.env.NOTION_SECRET_KEY
	});

	const n2m = new NotionToMarkdown({ notionClient: notion });

	try {
		const { results: database } = await notion.databases.query({ database_id: '469016d18fcc4ca9822eeb71bc0c235b' });

		const pages = [];
		for (let i = 0; i < database.length; i++) {
			const page = await notion.pages.retrieve({ page_id: database[i].id });
			const mdblocks = await n2m.pageToMarkdown(database[i].id);

			pages.push({ page, mdblocks });
		}

		const blogs: Blog[] = [];

		for (let i = 0; i < database.length; i++) {
			blogs.push({
				id: database[i].properties['ID'].unique_id.number as number,
				title: database[i].properties['Title'].title[0].plain_text as string,
				date: database[i].properties['Date'].date.start as string,
				description: database[i].properties['Description'].rich_text[0].plain_text as string,
				author: database[i].properties['author'].rich_text[0].plain_text as string,
				md: pages[i].mdblocks.map((b) => b.parent).join('\n') as string,
				author_img: database[i].properties['author_img'].files[0].file.url as string,
				url: database[i].properties['url'].rich_text[0].plain_text as string,
				type: database[i].properties['Type'].rich_text[0].plain_text as string,
				status: database[i].properties['Status'].select.name as string
			});
		}

		for (let i = 0; i < blogs.length; i++) {
			await supabaseAdmin.from('blog').upsert(blogs[i], { onConflict: 'id' });
			console.log(`[SERVER] - upserted blog ${blogs[i].id}`);
		}

		return blogs;
	} catch (e) {
		console.error(e);
		return { error: e };
	}
};
