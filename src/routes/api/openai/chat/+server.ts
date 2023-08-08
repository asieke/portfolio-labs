import dotenv from 'dotenv';
dotenv.config();

const { OPEN_AI_KEY } = process.env;

export const POST = async ({ request, locals }) => {
	const body = await request.json();
	const session = await locals.getSession();

	if (!session?.user) {
		return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
	}

	const response = await fetch('https://api.openai.com/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${OPEN_AI_KEY}`
		},
		body: JSON.stringify({
			model: 'gpt-4',
			stream: true,
			messages: body.messages
		})
	});

	if (!response.ok) {
		// Handle any errors that might've occurred during the OpenAI API call
		return new Response(JSON.stringify({ error: 'OpenAI API error' }), { status: response.status });
	}

	return new Response(response.body, {
		status: response.status,
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
