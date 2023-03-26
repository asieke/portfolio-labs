import { supabase } from '$lib/supabaseClient';

export async function load() {
	try {
		const response = await supabase.from('blog').select('tags').order('id', { ascending: true });

		if (response.error) {
			throw response.error;
		}

		const tagsSet = new Set();

		response.data.forEach((row) => {
			if (row.tags && Array.isArray(row.tags)) {
				row.tags.forEach((tag) => tagsSet.add(tag));
			}
		});

		return {
			tags: Array.from(tagsSet)
		};
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : 'Unknown error';
		return {
			status: 500,
			error: new Error(`Error fetching unique tags: ${errorMessage}`)
		};
	}
}
