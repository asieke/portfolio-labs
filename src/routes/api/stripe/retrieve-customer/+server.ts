import { stripe } from '$lib/clients/stripeServer';

export const POST = async ({ request }: { request: Request }) => {
	const body = await request.json();

	console.log('[SERVER]: Retrieving Customer');

	const customer = await stripe.customers.retrieve(body.customer_id);

	return new Response(JSON.stringify(customer));
};
