import { stripe } from '../client';

export const POST = async ({ request }) => {
	const body = await request.json();

	console.log('[SERVER]: Retrieving Subscriptions');

	const subscriptions = await stripe.subscriptions.list({
		customer: body.customerId
	});

	return new Response(JSON.stringify(subscriptions));
};
