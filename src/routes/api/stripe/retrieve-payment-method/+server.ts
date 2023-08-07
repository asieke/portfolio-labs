import { stripe } from '$lib/clients/stripeServer';

export const POST = async ({ request }: { request: Request }) => {
	const body = await request.json();

	console.log('[SERVER]: Retrieving Payment Method');

	const paymentMethod = await stripe.paymentMethods.retrieve(body.paymentMethodId as string);
	return new Response(JSON.stringify(paymentMethod));
};
