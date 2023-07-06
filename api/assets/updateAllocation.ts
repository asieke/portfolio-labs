/**
 * This is a Vercel serverless function written in TypeScript. It's designed to handle
 * requests to update allocations, specifically via POST requests. It uses the Supabase
 * client for database operations, and is intended to be used with the `@supabase/supabase-js`
 * and `@vercel/node` packages.
 *
 **/

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { supabase } from '../_supabaseClient.js';
import { classifySecurities } from './_classifySecurities.js';

export default async function updateAllocation(request: VercelRequest, response: VercelResponse) {
	console.log('Running UPDATE_ALLOCATION');

	const startTime = Date.now();

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

	// get all the rows that have not been updated in the last 24h
	const { data, error } = await supabase
		.from('assets')
		.select('*')
		//only when asset_class is null
		.is('asset_class', null);

	if (error) {
		response.status(500).send('Internal Server Error');
		return;
	}

	//there are no more assets to update
	if (!data || data.length === 0) {
		response.status(204).send('No assets to update');
		return;
	}

	await classifySecurities(supabase, data);

	const duration = Date.now() - startTime;

	// Continue processing...
	response.status(200).json({ duration });
}
