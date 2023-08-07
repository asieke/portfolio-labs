import { stripe } from '$lib/clients/stripeServer';

export const POST = async ({ request }: { request: Request }) => {
	const body = await request.json();

	console.log('[SERVER]: Retrieving Subscriptions');

	const subscriptions = await stripe.subscriptions.list({
		customer: body.customerId
	});

	return new Response(JSON.stringify(subscriptions));
};
