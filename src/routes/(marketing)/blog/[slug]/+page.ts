// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import type { Blog } from '$types/blog';
import { marked } from 'marked';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ params, parent }) => {
	const { slug } = params;
	const { supabase } = await parent();

	const { data: blog, error } = await supabase.from('blog').select('*').eq('url', slug).single();

	if (!slug || !blog || error) {
		throw redirect(303, '/blog');
	}

	return {
		blog: blog as Blog,
		html: marked(blog.md)
	};
};
