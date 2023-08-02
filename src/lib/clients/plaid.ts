import { browser } from '$app/environment';
import type { Plaid } from 'plaid-link';

export const openPlaidLink = async (linkToken: string, onSuccess: Plaid.OnSuccess) => {
	if (!browser) return;

	const handler = window.Plaid.create({
		token: linkToken,
		onSuccess: onSuccess,
		onLoad: () => {
			return null;
		},
		onExit: (err: Plaid.Error | null, metadata: Plaid.OnExitMetaData) => {
			return { err, metadata };
		},
		onEvent: (eventName: Plaid.EventName, metadata: Plaid.OnEventMetaData) => {
			return { eventName, metadata };
		}
	}) as Plaid.LinkHandler;

	handler.open();
};
