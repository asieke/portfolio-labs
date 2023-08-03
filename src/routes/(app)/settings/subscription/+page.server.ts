import { redirect } from '@sveltejs/kit';

import dotenv from 'dotenv';
dotenv.config();

import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET as string, { apiVersion: '2022-11-15' });

export async function load({ parent }) {
	const data = await parent();

	const { session } = data;

	console.log('[SERVER]: ', data);
	//if !session then redirect to login
	if (!session) {
		throw redirect(303, '/signin');
	}

	const products = await stripe.products.list();
	const prices = await stripe.prices.list();

	return {
		products: products.data.map((p) => ({
			...p,
			price: prices.data.find((price) => price.product === p.id)
		}))
	};
}
