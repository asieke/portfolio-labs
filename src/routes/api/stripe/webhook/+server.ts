import dotenv from 'dotenv';
dotenv.config();

import { supabaseAdmin } from '$lib/clients/supabase.js';
import { stripe } from '$lib/clients/stripeServer';
import type { Stripe } from 'stripe';

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

			// Handle the event
			// Handle the event
			switch (event.type) {
				case 'customer.subscription.created': {
					console.log(`>>>>>>>>>>>>>>>>Customer subscription created:`);
					// Then define and call a function to handle the event customer.subscription.created
					break;
				}
				case 'customer.subscription.deleted': {
					console.log(`>>>>>>>>>>>>>>>>Customer subscription deleted:`);

					const subscriptionData = data.object as Stripe.Subscription;
					const customerId = subscriptionData.customer as string;

					const subscriptions = await stripe.subscriptions.list({
						customer: customerId
					});

					if (subscriptions.data.length === 0) {
						const { error } = await supabaseAdmin.from('profiles').update({ is_active: false }).eq('stripe_customer_id', customerId);
						console.log('error?: ', error);
					}

					console.log('<<<<<<<<<<<<<');

					// Then define and call a function to handle the event customer.subscription.deleted
					break;
				}
				case 'customer.subscription.trial_will_end': {
					console.log(`>>>>>>>>>>>>>>>>Customer subscription trial will end:`);
					// Then define and call a function to handle the event customer.subscription.trial_will_end
					break;
				}
				case 'customer.subscription.updated': {
					console.log(`>>>>>>>>>>>>>>>>Customer subscription updated:`);
					// Then define and call a function to handle the event customer.subscription.trial_will_end
					break;
				}
				case 'invoice.created': {
					console.log(`>>>>>>>>>>>>>>>>Invoice created:`);
					// Then define and call a function to handle the event invoice.created
					break;
				}
				case 'invoice.payment_action_required': {
					console.log(`>>>>>>>>>>>>>>>>Invoice payment action required:`);
					// Then define and call a function to handle the event invoice.payment_action_required
					break;
				}
				case 'invoice.payment_failed': {
					console.log(`>>>>>>>>>>>>>>>>Invoice payment failed:`);
					// Then define and call a function to handle the event invoice.payment_failed
					break;
				}
				case 'invoice.payment_succeeded': {
					console.log(`>>>>>>>>>>>>>>>>Invoice payment succeeded:`);
					// Then define and call a function to handle the event invoice.payment_succeeded
					//get the customer id
					// const customerId = data.customer as string;
					const invoiceData = data.object as Stripe.Invoice;
					const customer = invoiceData.customer;

					const { data: profiles } = await supabaseAdmin.from('profiles').select('*').eq('stripe_customer_id', customer);

					//update the profile and set is_active to true
					if (profiles && profiles.length > 0) {
						const profile = profiles[0];
						profile.is_active = true;
						const { error } = await supabaseAdmin.from('profiles').update(profile).eq('id', profile.id);
					}

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
