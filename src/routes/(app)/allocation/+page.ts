// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { formatAssetClass } from '$models/assets';
import type { AssetClassType } from '$models/assets';

export const load: PageLoad = async ({ parent }) => {
	const { session, supabase } = await parent();

	//if !session then redirect to login
	if (!session) {
		throw redirect(303, '/');
	}

	// use supabase to get rows from accounts table where id = session.user.id
	// merge the portfolios that match the account_ids

	const { data, error } = await supabase
		.from('accounts')
		.select('*, portfolios(id, name, description, market_value, cost_basis, asset_class)')
		.eq('user_id', session.user.id);

	if (error || !data || !data[0]) {
		return {};
	}

	const account = data[0];
	account.asset_class = formatAssetClass(account.asset_class as AssetClassType);
	account.portfolios = account.portfolios.map(
		(portfolio: {
			id: number;
			name: string;
			description: string;
			market_value: number;
			cost_basis: number;
			asset_class: AssetClassType;
		}) => ({
			...portfolio,
			asset_class: formatAssetClass(portfolio.asset_class as AssetClassType)
		})
	);

	return {
		user: session.user,
		account: account
	};
};
