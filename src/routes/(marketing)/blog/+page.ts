// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import type { Blog } from '$types/blog';

export const load: PageLoad = async ({ parent }) => {
	const { supabase } = await parent();

	const { data: blogs } = await supabase.from('blog').select('*').order('created_at', { ascending: false });

	return {
		blogs: blogs as Blog[]
	};
};
