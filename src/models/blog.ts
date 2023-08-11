import type { SupabaseClient } from '@supabase/supabase-js';
import type { Blog } from '$types/blog';

/**
 * Retrieves the latest blogs from the database.
 *
 * @function
 * @param {SupabaseClient} supabase - The Supabase client instance used to fetch the blogs.
 * @param {number} [num=3] - The number of blogs to retrieve. Defaults to 3.
 *
 * @returns {Promise<Blog[]>} - An array of blogs. Returns an empty array if there's an error or no blogs found.
 *
 * @example
 *
 * const blogs = await getBlogs(supabaseClient, 5);
 */
export const getBlogs = async (supabase: SupabaseClient, num = 3) => {
	const { data: blogs, error } = await supabase.from('blog').select('*').order('created_at', { ascending: false }).limit(num);

	if (!blogs || error) {
		return [] as Blog[];
	}

	return blogs as Blog[];
};
