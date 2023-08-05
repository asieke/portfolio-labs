import dotenv from 'dotenv';
dotenv.config();

import { Products } from 'plaid';
import type { CountryCode, Products as ProductType } from 'plaid';
import { plaidClient } from '../client';

const PLAID_PRODUCTS = (process.env.PLAID_PRODUCTS || Products.Transactions).split(',') as ProductType[];
const PLAID_COUNTRY_CODES = (process.env.PLAID_COUNTRY_CODES || 'US').split(',') as CountryCode[];
// const PLAID_REDIRECT_URI = process.env.PLAID_REDIRECT_URI || '';

export const POST = async ({ request, locals }) => {
	console.log('[SERVER]: Generating Link Token');

	const session = await req.locals.getSession();
	const userId = session?.user.id || '';

	const configs = {
		user: {
			// This should correspond to a unique id for the current user.
			client_user_id: userId
		},
		client_name: 'Sieke Portfolio Labs',
		products: PLAID_PRODUCTS,
		country_codes: PLAID_COUNTRY_CODES,
		language: 'en'
		// redirect_uri: PLAID_REDIRECT_URI
	};

	try {
		const createTokenResponse = await plaidClient.linkTokenCreate(configs);

		return new Response(JSON.stringify(createTokenResponse.data));
	} catch (error) {
		//return error
		return new Response(JSON.stringify({ error }));
	}
};
