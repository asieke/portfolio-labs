import { stripe } from '$lib/clients/stripeServer';
import type { Stripe } from 'stripe';

export const POST = async ({ request }) => {
	const body = await request.json();

	console.log('[SERVER]: Creating a Subscription');

	try {
		// Create the subscription. Note we're expanding the Subscription's
		// latest invoice and that invoice's payment_intent
		// so we can pass it to the front end to confirm the payment

		const subscription = await stripe.subscriptions.create({
			customer: body.customerId,
			trial_period_days: body.trial_period_days,
			items: [
				{
					price: body.priceId
				}
			],
			payment_behavior: 'default_incomplete',
			payment_settings: { save_default_payment_method: 'on_subscription' },
			expand: ['latest_invoice.payment_intent', 'pending_setup_intent']
		});

		if (!subscription) {
			throw new Error('Subscription not created');
		}

		const pending_setup_intent = subscription.pending_setup_intent as Stripe.SetupIntent;
		const payment_intent = (subscription.latest_invoice as Stripe.Invoice)?.payment_intent as Stripe.PaymentIntent;

		if (subscription.pending_setup_intent !== null) {
			return new Response(
				JSON.stringify({
					type: 'setup',
					clientSecret: pending_setup_intent.client_secret
				})
			);
		} else {
			return new Response(
				JSON.stringify({
					type: 'payment',
					clientSecret: payment_intent.client_secret
				})
			);
		}
	} catch (error) {
		return new Response(JSON.stringify({ error }), { status: 400 });
	}
};
