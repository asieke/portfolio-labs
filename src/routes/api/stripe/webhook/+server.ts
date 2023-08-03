import type { RequestEvent } from '@sveltejs/kit';
import type { Stripe } from 'stripe';

import dotenv from 'dotenv';
dotenv.config();

import { stripe } from '$lib/clients/stripeServer';

const WEBHOOK_SECRET = process.env['STRIPE_WEBHOOK_SECRET'];

function toBuffer(ab: ArrayBuffer): Buffer {
	const buf = Buffer.alloc(ab.byteLength);
	const view = new Uint8Array(ab);
	for (let i = 0; i < buf.length; i++) {
		buf[i] = view[i];
	}
	return buf;
}

export const POST = async ({ request }) => {
	if (WEBHOOK_SECRET) {
		const _rawBody = await request.arrayBuffer();
		const payload = toBuffer(_rawBody);
		const signature = request.headers.get('stripe-signature') as string;

		try {
			const event = stripe.webhooks.constructEvent(payload, signature, WEBHOOK_SECRET);
			const data = event.data;

			console.log('EVENT DATA', data);

			switch (event.type) {
				case 'invoice.paid':
					// Used to provision services after the trial has ended.
					// The status of the invoice will show up as paid. Store the status in your
					// database to reference when a user accesses your service to avoid hitting rate limits.

					console.log('>>>>>>>>>>>>>>Invoice Paid', event);

					break;
				case 'invoice.payment_failed':
					// If the payment fails or the customer does not have a valid payment method,
					//  an invoice.payment_failed event is sent, the subscription becomes past_due.
					// Use this webhook to notify your user that their payment has
					// failed and to retrieve new card details.
					break;
				case 'customer.subscription.deleted':
					if (event.request != null) {
						// handle a subscription canceled by your request
						// from above.
						console.log('>>>>>>>>>>>>>>Subscription Deleted', event);
					} else {
						// handle subscription canceled automatically based
						// upon your subscription settings.
						console.log('>>>>>>>>>>>>>>Subscription Deleted', event);
					}
					break;
				default:
					// Unexpected event type
					console.log('>>>>>>>>>>>>>>Unexpected event type', event);
			}
		} catch (err) {
			return new Response(JSON.stringify({ err }), { status: 500 });
		}
	}

	return new Response(JSON.stringify({ received: true }), { status: 200 });
};
