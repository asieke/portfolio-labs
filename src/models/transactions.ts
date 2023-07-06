import type { SupabaseClient } from '@supabase/supabase-js';
import { sampleTransactions } from '$data/transactions';

export const addTransactions = async (supabase: SupabaseClient, csv: string, accountID: number) => {
	try {
		// delete from portfolios where account_id = accountID
		const { error: portfolioDeleteEerror } = await supabase
			.from('portfolios')
			.delete()
			.match({ account_id: accountID });
		if (portfolioDeleteEerror) throw portfolioDeleteEerror;

		// generate an array of objects that contain the unique names & descriptions from sampleTransactions
		const uniqueNames = sampleTransactions
			.map((txn) => {
				return { name: txn.name, description: txn.description };
			})
			.filter((txn, index, self) => {
				return (
					index ===
					self.findIndex((t) => {
						return t.name === txn.name && t.description === txn.description;
					})
				);
			});

		const { data: portfolioData, error: portfolioInsertError } = await supabase
			.from('portfolios')
			.insert(uniqueNames.map((txn) => ({ ...txn, account_id: accountID })))
			.select();
		if (!portfolioData || portfolioInsertError) throw portfolioInsertError;

		//create a key-value map that maps portfolio name to portfolio id
		const portfolioMap = portfolioData.reduce((map, obj) => {
			map[obj.name] = obj.id;
			return map;
		}, {});

		// create a new array of transactions and add a field to each, portfolio_id that maps
		// to the portfolio id from the portfolioMap
		const txns = sampleTransactions.map((txn) => {
			return {
				date: txn.date,
				action: txn.action,
				symbol: txn.symbol,
				amount: txn.amount,
				portfolio_id: portfolioMap[txn.name]
			};
		});

		const { error: txnInsertError } = await supabase.from('transactions').insert(txns);
		if (txnInsertError) throw txnInsertError;

		console.log('Transactions added successfully', txns);
	} catch (e) {
		console.log(e);
	}

	// try {
	// 	const txn = sampleTransactions;
	// 	await supabase.from('transactions').delete().match({ portfolio_id: id });
	// 	const { data, error } = await supabase.from('transactions').insert(txn);
	// 	console.log(data, error);
	// } catch (e) {
	// 	console.log(e);
	// }
};
