import dotenv from 'dotenv';
dotenv.config();

export const POST = async (req) => {
	const supabase = req.locals.supabase;
	const apiKey = req.request.headers.get('x-api-key');

	if (!supabase || apiKey !== process.env.PRIVATE_API_KEY) {
		return new Response('Unauthorized', { status: 401 });
	}

	const output = { hello: 'world' };

	return new Response(JSON.stringify(output));
};
