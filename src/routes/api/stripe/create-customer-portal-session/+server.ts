import dotenv from 'dotenv';
dotenv.config();

import { stripe } from '$lib/clients/stripeServer';
import { redirect } from '@sveltejs/kit';

export const POST = async ({ request }: { request: Request }) => {
	console.log('[SERVER]: Redirecting User to Stripe Portal');

	//get the request form data
	const formData = new URLSearchParams(await request.text());
	const customerId = formData.get('customerID');

	const session = await stripe.billingPortal.sessions.create({
		customer: customerId as string,
		return_url: process.env.PUBLIC_APP_URL + '/settings/subscription'
	});

	// Redirect to the URL returned on the previous step in session.url
	throw redirect(302, session.url);
};
