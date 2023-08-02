import dotenv from 'dotenv';
dotenv.config();

import { plaidClient } from '../client';

import type { ItemPublicTokenExchangeRequest } from 'plaid';

export const POST = async ({ request }) => {
	//please extract the public_token from the request body and print it out

	console.log('[SERVER]: Exchanging PUBLIC TOKEN');

	const body = await request.json();
	const { public_token } = body;

	const req: ItemPublicTokenExchangeRequest = {
		public_token: public_token
	};
	try {
		const response = await plaidClient.itemPublicTokenExchange(req);
		const access_token = response.data.access_token;
		const itemId = response.data.item_id;

		console.log('[SERVER]', response.data);

		return new Response(JSON.stringify({ access_token, itemId }));
	} catch (err) {
		console.log('[SERVER] - error: ', err);
		return new Response(JSON.stringify({ error: err }));
	}
};
