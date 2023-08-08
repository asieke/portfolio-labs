const MODEL = 'gpt-4';

export const getChatStream = async (messages: { role: string; content: string }[]) => {
	return await fetch('/api/openai/chat', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			model: MODEL,
			stream: true,
			messages: messages
		})
	});
};
