import { supabase } from '../_lib/supabase.js';
import { sampleAccounts } from '../_sampleData/sampleAccounts.js';

export const initializeAccounts = async (userId) => {
	try {
		//delete from accounts wher user_id = user_id

		await supabase.from('accounts').delete().match({ user_id: userId });
		await supabase.from('portfolios').delete().match({ user_id: userId });

		for (let i = 0; i < sampleAccounts.length; i++) {
			const account = sampleAccounts[i];
			//create a new object that has user_id and no portfolios
			const accountData = {
				user_id: userId,
				name: account.name,
				description: account.description,
				type: account.type
			};

			const { data } = await supabase.from('accounts').insert(accountData).select();
			const account_id = data[0].id;

			for (let j = 0; j < account.portfolios.length; j++) {
				const portfolio = account.portfolios[j];
				const portfolioData = {
					user_id: userId,
					account_id: account_id,
					name: portfolio.name,
					description: portfolio.description,
					type: portfolio.type
				};
				const { data } = await supabase.from('portfolios').insert(portfolioData).select();
				const portfolio_id = data[0].id;

				const transactionData = portfolio.transactions.map((transaction) => ({
					portfolio_id: portfolio_id,
					user_id: userId,
					account_id: account_id,
					...transaction
				}));
				await supabase.from('transactions').insert(transactionData);
			}
		}
	} catch (error) {
		console.log(error);
	}
};
