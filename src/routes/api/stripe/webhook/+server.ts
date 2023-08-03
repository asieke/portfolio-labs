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

			// Handle the event
			// Handle the event
			switch (event.type) {
				case 'customer.subscription.created': {
					const customerSubscriptionCreated = event.data.object;
					console.log(`>>>>>>>>>>>>>>>>Customer subscription created:`, customerSubscriptionCreated);
					// Then define and call a function to handle the event customer.subscription.created
					break;
				}
				case 'customer.subscription.deleted': {
					const customerSubscriptionDeleted = event.data.object;
					console.log(`>>>>>>>>>>>>>>>>Customer subscription deleted:`, customerSubscriptionDeleted);
					// Then define and call a function to handle the event customer.subscription.deleted
					break;
				}
				case 'customer.subscription.trial_will_end': {
					const customerSubscriptionTrialWillEnd = event.data.object;
					console.log(`>>>>>>>>>>>>>>>>Customer subscription trial will end:`, customerSubscriptionTrialWillEnd);
					// Then define and call a function to handle the event customer.subscription.trial_will_end
					break;
				}
				case 'customer.subscription.updated': {
					const customerSubscriptionTrialWillEnd = event.data.object;
					console.log(`>>>>>>>>>>>>>>>>Customer subscription trial will end:`, customerSubscriptionTrialWillEnd);
					// Then define and call a function to handle the event customer.subscription.trial_will_end
					break;
				}
				case 'invoice.created': {
					const invoiceCreated = event.data.object;
					console.log(`>>>>>>>>>>>>>>>>Invoice created:`, invoiceCreated);
					// Then define and call a function to handle the event invoice.created
					break;
				}
				case 'invoice.payment_action_required': {
					const invoicePaymentActionRequired = event.data.object;
					console.log(`>>>>>>>>>>>>>>>>Invoice payment action required:`, invoicePaymentActionRequired);
					// Then define and call a function to handle the event invoice.payment_action_required
					break;
				}
				case 'invoice.payment_failed': {
					const invoicePaymentFailed = event.data.object;
					console.log(`>>>>>>>>>>>>>>>>Invoice payment failed:`, invoicePaymentFailed);
					// Then define and call a function to handle the event invoice.payment_failed
					break;
				}
				case 'invoice.payment_succeeded': {
					const invoicePaymentSucceeded = event.data.object;
					console.log(`>>>>>>>>>>>>>>>>Invoice payment succeeded:`, invoicePaymentSucceeded);
					// Then define and call a function to handle the event invoice.payment_succeeded
					break;
				}
				// ... handle other event types
				default:
					console.log(`Unhandled event type ${event.type}`);
			}
		} catch (err) {
			return new Response(JSON.stringify({ err }), { status: 500 });
		}
	}

	return new Response(JSON.stringify({ received: true }), { status: 200 });
};
