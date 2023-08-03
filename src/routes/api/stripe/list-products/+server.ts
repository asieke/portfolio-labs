import { stripe } from '$lib/clients/stripeServer';

export const POST = async () => {
	console.log('[SERVER]: Retrieving Products');

	const [products, prices] = await Promise.all([stripe.products.list(), stripe.prices.list()]);

	return new Response(JSON.stringify({ products: products.data, prices: prices.data }));
};
