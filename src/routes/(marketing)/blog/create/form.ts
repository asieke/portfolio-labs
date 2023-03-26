import { supabase } from '$lib/supabaseClient';

export interface BlogPost {
	title: string;
	description: string;
	markdown: string;
	url: string;
	heroImage: string;
	author: string;
	authorImage: string;
	tags: string[];
}

export interface ImageFile {
	url: string;
	imgClass: string;
	showCopy: boolean;
}

export const createBlogPost = async (blogPost: BlogPost) => {
	try {
		const { error } = await supabase.from('blog').insert([
			{
				title: blogPost.title,
				description: blogPost.description,
				md: blogPost.markdown,
				hero_img: blogPost.heroImage,
				url: blogPost.url,
				author: blogPost.author,
				author_img: blogPost.authorImage,
				tags: blogPost.tags,
				date: new Date().toISOString()
			}
		]);

		if (error) {
			throw error;
		}

		console.log('Data inserted successfully.');
	} catch (error) {
		console.error('Error inserting data:', error);
	}
};
