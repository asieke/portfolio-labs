import type { SupabaseClient } from '@supabase/supabase-js';
import { getTransactionJSONfromCSV } from './transactions';
import { getPositionsJSONfromCSV } from './positions';

export interface Portfolio {
	name: string;
	description: string;
	transactions: string;
	positions: string;
	account_id: number;
}

export const addPortfolio = async (portfolio: Portfolio, supabase: SupabaseClient) => {
	//check and see if the portfolio already exists

	const { data: existingRow } = await supabase
		.from('portfolios')
		.select('*')
		.eq('name', portfolio.name)
		.eq('description', portfolio.description)
		.eq('account_id', portfolio.account_id);

	let portfolio_id = existingRow && existingRow.length > 0 ? existingRow[0].id : null;

	if (!existingRow || existingRow.length === 0) {
		const { data: newRow } = await supabase
			.from('portfolios')
			.insert([
				{
					name: portfolio.name,
					description: portfolio.description,
					account_id: portfolio.account_id
				}
			])
			.select();
		portfolio_id = newRow && newRow.length > 0 ? newRow[0].id : null;
	}

	const positionData = getPositionsJSONfromCSV(portfolio.positions, portfolio_id);
	await supabase.from('positions').delete().eq('portfolio_id', portfolio_id);
	await supabase.from('positions').insert(positionData);

	const txndata = getTransactionJSONfromCSV(portfolio.transactions, portfolio_id);
	await supabase.from('transactions').delete().eq('portfolio_id', portfolio_id);
	await supabase.from('transactions').insert(txndata);

	const market_value = positionData.reduce((acc, curr) => acc + (curr.market_value || 0), 0);
	const cost_basis = positionData.reduce((acc, curr) => acc + (curr.cost_basis || 0), 0);

	//update the portfolio with the market_value and cost_basis
	await supabase.from('portfolios').update({ market_value, cost_basis }).eq('id', portfolio_id);

	return null;
};
