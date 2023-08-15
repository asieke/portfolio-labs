// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import type { Blog } from '$types/blog';

export const load: PageLoad = async ({ parent }) => {
	const { supabase } = await parent();

	const { data: blogs, error } = await supabase.from('blog').select('*').eq('status', 'published').order('created_at', { ascending: false });

	if (!blogs || error) {
		return { blogs: [] as Blog[], types: [] as string[] };
	}

	//get all unique types from blogs
	const types = ['All', ...new Set(blogs.map((b) => b.type))] || [];

	return {
		blogs: blogs as Blog[],
		types: types as string[]
	};
};
