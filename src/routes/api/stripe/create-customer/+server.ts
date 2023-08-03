import { stripe } from '../client';

export const POST = async ({ request }) => {
	const body = await request.json();

	console.log('[SERVER]: Creating Stripe Customer');

	const customer = await stripe.customers.create({
		email: body.email,
		name: body.name
	});

	return new Response(JSON.stringify(customer));
};
