import { stripe } from '../client';

export const POST = async ({ request }) => {
	const body = await request.json();

	console.log('[SERVER]: Retrieving Customer');

	const customer = await stripe.customers.retrieve(body.customer_id);

	return new Response(JSON.stringify(customer));
};
