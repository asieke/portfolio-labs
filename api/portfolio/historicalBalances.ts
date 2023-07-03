import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabase } from '../_supabaseClient.js';

import { getHistoricalBalance } from './_getHistoricalBalances.js';

const portfolio_id = 92;

export default async function historicalBalances(request: VercelRequest, response: VercelResponse) {
	console.log('Running Update Historical Balances');

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

	// 3. Get the unique symbols from the transactions table
	try {
		const { error, output, positions } = await getHistoricalBalance(supabase, portfolio_id);

		if (error) throw error;

		const { error: deleteError } = await supabase
			.from('balances')
			.delete()
			.match({ portfolio_id: portfolio_id });
		if (deleteError) throw deleteError;
		const { error: priceError } = await supabase.from('balances').insert(output);
		if (priceError) throw priceError;

		const { error: deleteError2 } = await supabase
			.from('positions')
			.delete()
			.match({ portfolio_id: portfolio_id });
		if (deleteError2) throw deleteError2;
		const { error: priceError2 } = await supabase.from('positions').insert(positions);
		if (priceError2) throw priceError2;

		return response.status(200).json({ status: 'done' });
	} catch (e) {
		return response.status(500).json({ error: e.message });
	}
}
