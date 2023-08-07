import { stripe } from '$lib/clients/stripeServer';

export const POST = async ({ request }) => {
	const body = await request.json();

	console.log('[SERVER]: Retrieving Payment Methods');

	const paymentMethods = await stripe.customers.listPaymentMethods(body.customerId, { type: 'card' });

	return new Response(JSON.stringify(paymentMethods.data));
};
