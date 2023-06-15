import type { VercelRequest, VercelResponse } from '@vercel/node';

import supabase from '../supabaseClient.ts';

export default async function updateAllocation(request: VercelRequest, response: VercelResponse) {
	console.log(supabase);

	// 1. Reject if not a POST request
	if (request.method !== 'POST') {
		response.status(405).send('Method Not Allowed'); // 405 is the status code for Method Not Allowed
		return;
	}

	// 2. Reject if API key doesn't match
	const incomingKey = process.env.INCOMING_KEY;
	const requestApiKey = request.headers['api_key']; // Adjusted to accommodate your curl command

	if (requestApiKey !== incomingKey) {
		response.status(401).send('Unauthorized'); // 401 is the status code for Unauthorized
		return;
	}

	// get the number of rows in supabase transactions table
	const { data, error } = await supabase.from('asset_classes').select('*');
	if (error) {
		response.status(500).send('Internal Server Error');
		return;
	}

	console.log('HELLO THERE!!!', data);

	// Continue processing...
	response.status(200).json({
		body: request.body,
		query: request.query,
		cookies: request.cookies,
		data: JSON.stringify(data)
	});
}
