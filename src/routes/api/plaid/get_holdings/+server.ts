import dotenv from 'dotenv';
dotenv.config();

import { plaidClient } from '../client';

import type { InvestmentsHoldingsGetRequest } from 'plaid';

export const POST = async ({ request }: { request: Request }) => {
	//please extract the public_token from the request body and print it out

	console.log('[SERVER]: Requesting Investment Holdings');

	const body = await request.json();
	const { access_token } = body;

	// const accessToken = 'access-sandbox-70dd3adb-0ecc-4b5d-9d77-d0c4db2b3b6b';

	// Pull Holdings for an Item
	const req: InvestmentsHoldingsGetRequest = {
		access_token: access_token
	};
	try {
		const response = await plaidClient.investmentsHoldingsGet(req);
		const holdings = response.data.holdings;
		const securities = response.data.securities;
		return new Response(JSON.stringify({ data: response.data, holdings, securities }));
	} catch (error) {
		return new Response(JSON.stringify({ error: error }));
	}
};
