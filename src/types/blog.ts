export type Blog = {
	id: number; // bigint corresponds to a number in TypeScript
	created_at: Date; // using the Date type for timestamp with time zone
	title: string;
	date: Date; // using the Date type for date fields
	description: string;
	author: string;
	hero_img: string;
	md: string;
	tags: string[];
	author_img: string;
	url: string;
	type: string;
};
