export type Blog = {
	id: number; // bigint corresponds to a number in TypeScript
	created_at?: Date; // using the Date type for timestamp with time zone
	title: string;
	date: string; // using the Date type for date fields
	description: string;
	author: string;
	md: string;
	author_img: string;
	url: string;
	type: string;
	status: string;
};

// id, name, description, type, author, author_img, url, date, status, md
