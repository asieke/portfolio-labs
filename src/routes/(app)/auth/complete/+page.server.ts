import { stripe } from '$lib/clients/stripeServer';

export async function load({ parent, request }) {
	const data = await parent();

	const paramsObj: Record<string, string> = {};
	const url = new URL(request.url);
	const params = url.searchParams;

	for (const [key, value] of params.entries()) {
		paramsObj[key] = value;
	}
}
