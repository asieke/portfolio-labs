const MODEL = 'gpt-4';
import { PUBLIC_OPEN_AI_KEY } from '$env/static/public';

export const getChatStream = async (messages: { role: string; content: string }[]) => {
	return await fetch('https://api.openai.com/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${PUBLIC_OPEN_AI_KEY}`
		},
		body: JSON.stringify({
			model: MODEL,
			stream: true,
			messages: messages
		})
	});
};
