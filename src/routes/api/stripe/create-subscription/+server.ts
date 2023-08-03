import { stripe } from '../client';

export const POST = async ({ request }) => {
	const body = await request.json();

	console.log('[SERVER]: Creating a Subscription');

	try {
		// Create the subscription. Note we're expanding the Subscription's
		// latest invoice and that invoice's payment_intent
		// so we can pass it to the front end to confirm the payment

		console.log(body);
		const subscription = await stripe.subscriptions.create({
			customer: body.customerId,
			items: [
				{
					price: body.priceId
				}
			],
			payment_behavior: 'default_incomplete',
			payment_settings: { save_default_payment_method: 'on_subscription' },
			expand: ['latest_invoice.payment_intent']
		});

		console.log('subscription>>>>>', subscription);

		return new Response(JSON.stringify({ subscriptionId: subscription.id, clientSecret: subscription.latest_invoice.payment_intent.client_secret }));
	} catch (error) {
		return new Response(JSON.stringify({ error: { message: error.message } }), { status: 400 });
	}
};
