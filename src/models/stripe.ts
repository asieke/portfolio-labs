import axios from 'axios';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Profile } from '$types/profiles';
import { updateProfile } from '$models/profile';
import type { Stripe } from 'stripe';
import type { StripeProduct } from '$types/stripe';

export const createOrGetCustomer = async (supabase: SupabaseClient, profile: Profile) => {
	// if profile.stripe_customer_id is null then create a new customer
	if (!profile.stripe_customer_id) {
		const res = await axios.post('/api/stripe/create-customer', {
			email: profile.email,
			name: profile.full_name
		});

		profile.stripe_customer_id = res.data.id;
		await updateProfile(supabase, profile);

		return res.data;
	} else {
		// get the customer from stripe
		const res = await axios.post('/api/stripe/retrieve-customer', {
			customer_id: profile.stripe_customer_id
		});
		return res.data;
	}
};

export const createSubscription = async (customerId: string, priceId: string) => {
	const res = await axios.post('/api/stripe/create-subscription', {
		priceId,
		customerId
	});
	return res.data;
};

export const getSubscriptions = async (customerId: string) => {
	const res = await axios.post('/api/stripe/retrieve-subscriptions', {
		customerId
	});
	return res.data;
};

export const getProducts = async () => {
	const res = await axios.post('/api/stripe/list-products', {});

	const products = res.data.products as Stripe.Product[];
	const prices = res.data.prices as Stripe.Price[];

	return products.map((p) => {
		const price = prices.find((pr) => pr.id === p.default_price);
		return {
			product_id: p.id,
			name: p.name,
			description: p.description,
			price_id: price?.id,
			unit_amount: price?.unit_amount,
			interval: price?.recurring?.interval,
			yearly_price: price?.recurring?.interval === 'month' ? (price?.unit_amount || 0) * 12 : price?.unit_amount,
			monthly_price: price?.recurring?.interval === 'year' ? (price?.unit_amount || 0) / 12 : price?.unit_amount
		};
	}) as StripeProduct[];
};
