import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';
import { marked } from 'marked';
import highlight from 'highlight.js';

marked.setOptions({
	renderer: new marked.Renderer(),
	highlight: function (code, lang) {
		const hljs = highlight;
		const language = hljs.getLanguage(lang) ? lang : 'plaintext';
		return hljs.highlight(code, { language }).value;
	},
	langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
	pedantic: false,
	gfm: true,
	breaks: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	xhtml: false
});

interface LoadParams {
	params: {
		slug: string;
	};
}

export async function load({ params }: LoadParams) {
	const { data, error: supabaseError } = await supabase
		.from('blog')
		.select('*')
		.eq('url', params.slug);

	if (supabaseError || !data) {
		throw error(404, 'Not found');
	}

	const html = marked.parse(data[0].md);
	return { html, ...data[0] };
}
