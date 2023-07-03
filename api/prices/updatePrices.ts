import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabase } from '../_supabaseClient.js';

import { fetchPrices } from './_fetchPrices.js';
import { benchmarks } from './_data.js';

type FetchPricesReturn =
	| {
			date: string;
			symbol: string;
			price?: number;
			pct?: number;
	  }[]
	| null;

export default async function updateAllocation(request: VercelRequest, response: VercelResponse) {
	console.log('Running UpdatePrices');

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
		const { data: transactions, error } = await supabase
			.from('transactions')
			.select('symbol')
			.not('symbol', 'is', null);
		if (error || !transactions) throw error;

		const symbols = [
			...new Set([...benchmarks, ...transactions.map((transaction) => transaction.symbol)])
		];

		// 4. Get the current price for each symbol

		for (let i = 0; i < symbols.length; i++) {
			const symbol = symbols[i];
			const prices: FetchPricesReturn = await fetchPrices(symbol);
			const { error: deleteError } = await supabase.from('prices').delete().match({ symbol });
			if (deleteError) throw deleteError;
			const { error: priceError } = await supabase.from('prices').insert(prices);
			if (priceError) throw priceError;
		}

		return response.status(200).json({ status: 'done' });
	} catch (e) {
		return response.status(500).json({ error: e.message });
	}
}
