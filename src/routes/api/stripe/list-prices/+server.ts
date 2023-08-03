import { stripe } from '$lib/clients/stripeServer';

export const POST = async () => {
	console.log('[SERVER]: Retrieving Subscriptions');

	const prices = await stripe.prices.list({
		limit: 3
	});

	return new Response(JSON.stringify(prices));
};
