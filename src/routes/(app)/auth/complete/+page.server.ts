import { stripe } from '$lib/clients/stripeServer';

export async function load({ parent, request }) {
	const data = await parent();
	console.log('[SERVER]: ', request);

	const paramsObj: Record<string, string> = {};
	const url = new URL(request.url);
	const params = url.searchParams;

	for (const [key, value] of params.entries()) {
		paramsObj[key] = value;
	}

	const setupIntent = await stripe.setupIntents.retrieve(paramsObj.setup_intent);

	console.table(setupIntent);

	// for (let [key, value] of urlParams.entries()) {
	// 	paramsObj[key] = value;
	// }

	// the page receives URL params e.g. payment_intent please print them out server side

	console.table(paramsObj);
}
