// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import type { Position, Portfolio } from './types';

export const load: PageLoad = async ({ parent }) => {
	const { session, supabase } = await parent();

	//if !session then redirect to login
	if (!session) {
		throw redirect(303, '/');
	}

	// use supabase to get rows from accounts table where id = session.user.id
	// merge the portfolios that match the account_ids

	try {
		const { data: accounts, error: accountsError } = await supabase
			.from('accounts')
			.select('*, portfolios(id, name, description, market_value, cost_basis)')
			.eq('user_id', session.user.id);

		if (!accounts || accounts.length < 1) throw new Error('No accounts found');
		if (accountsError) throw accountsError;

		const account_ids = accounts.map((account) => account.id);
		const { data: portfolios, error: portfoliosError } = await supabase
			.from('portfolios')
			.select('*')
			.in('account_id', account_ids);

		if (!portfolios || portfolios.length < 1) throw new Error('No portfolios found');
		if (portfoliosError) throw portfoliosError;

		const temp: Portfolio[] = [{ id: -1, name: 'All Portfolios' }, ...(portfolios as Portfolio[])];

		const portfolio_ids = portfolios.map((portfolio) => portfolio.id);

		const { data: positions, error: positionsError } = await supabase
			.from('positions')
			.select('portfolio_id, symbol, name, cost_basis, market_value, quantity, price')
			.in('portfolio_id', portfolio_ids)
			.order('portfolio_id', { ascending: true })
			.order('symbol', { ascending: true });

		if (!positions || positions.length < 1) throw new Error('No positions found');
		if (positionsError) throw positionsError;

		// Add a new "portfolio" with an id=-1 that represents the total positions of all portfolios

		const map: Record<string, Position> = {};

		positions.forEach((position) => {
			if (map[position.symbol]) {
				map[position.symbol].quantity += position.quantity;
				map[position.symbol].market_value += position.market_value;
				map[position.symbol].cost_basis += position.cost_basis;
			} else {
				map[position.symbol] = { ...position, portfolio_id: -1 };
			}
		});

		const labels = Object.keys(map);
		labels.sort((a, b) => {
			if (a === 'CASHX') return 1;
			if (b === 'CASHX') return -1;
			return a.localeCompare(b);
		});

		labels.forEach((symbol) => {
			positions.push(map[symbol]);
		});

		return {
			accounts: accounts,
			portfolios: temp,
			positions: positions
		};
	} catch (error) {
		console.log(error);

		return {
			accounts: [],
			portfolios: [],
			positions: []
		};
	}
};
