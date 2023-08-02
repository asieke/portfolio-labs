import dotenv from 'dotenv';
dotenv.config();

export const POST = async (req) => {
	return new Response(JSON.stringify({ hello: 'world' }));
};
