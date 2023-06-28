import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabase } from '../_supabaseClient.js';

import { getBondPrice } from './_updateMuni.js';

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

	// select from supabase, assets table, where primary_asset_class like 'Fixed Income'
	const { data, error } = await supabase
		.from('assets')
		.select('*')
		.ilike('primary_asset_class', '%Muni%');

	if (error || !data) {
		response.status(500).send('Internal Server Error');
		return;
	}

	const html = await getBondPrice(data[0]);

	return response.status(200).json({ html });
}
