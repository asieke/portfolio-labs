import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function updateAllocation(request: VercelRequest, response: VercelResponse) {
	// 1. Reject if not a POST request
	if (request.method !== 'POST') {
		response.status(405).send('Method Not Allowed'); // 405 is the status code for Method Not Allowed
		return;
	}

	// 2. Reject if API key doesn't match
	const incomingKey = process.env.INCOMING_KEY;
	const requestApiKey = request.headers['api_key']; // Adjusted to accommodate your curl command

	console.log('incomingKey', incomingKey);
	console.log('requestApiKey', requestApiKey);

	if (requestApiKey !== incomingKey) {
		response.status(401).send('Unauthorized'); // 401 is the status code for Unauthorized
		return;
	}

	// Continue processing...
	response.status(200).json({
		body: request.body,
		query: request.query,
		cookies: request.cookies
	});
}
