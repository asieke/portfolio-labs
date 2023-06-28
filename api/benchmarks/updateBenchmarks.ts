import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabase } from '../_supabaseClient.js';
import { fetchHistoricalPrices } from './_getHistoricalPrices.js';
import { benchmarks } from './_data.js';

export default async function updateAllocation(request: VercelRequest, response: VercelResponse) {
	console.log('Running UpdatePrices');

	if (request.method !== 'POST') {
		response.status(405).send('Method Not Allowed'); // 405 is the status code for Method Not Allowed
		return;
	}

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

	try {
		for (let i = 0; i < benchmarks.length; i++) {
			console.log(benchmarks[i].symbol, benchmarks[i].assetClass);
			const data = await fetchHistoricalPrices(benchmarks[i].symbol, benchmarks[i].assetClass);
			const { error, data: rows } = await supabase.from('benchmarks').insert(data);
		}
	} catch (error) {
		console.log(error);
	}

	return response.status(200).json({ status: 'done' });
}
