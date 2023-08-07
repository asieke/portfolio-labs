import { stripe } from '$lib/clients/stripeServer';

export const POST = async ({ request }: { request: Request }) => {
	const body = await request.json();

	console.log('[SERVER]: Creating Stripe Customer');

	const customer = await stripe.customers.create({
		email: body.email,
		name: body.name
	});

	return new Response(JSON.stringify(customer));
};
