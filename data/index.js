// import { loadTransactions } from './transactions/transactions.js';
import { initializeAccounts } from './accounts/accounts.js';
import { initializeAssets } from './assets/assets.js';
import { initializePrices } from './prices/prices.js';
import { initializePortfolios } from './portfolios/portfolios.js';
import { supabase } from './_lib/supabase.js';

const USER_ID = 'db0d89cf-3bda-4dc4-af87-a4b146c506fe';

async function main() {
	console.log('---------------------------------');
	// console.log('0.  Deleting All Data');
	// let { error } = await supabase.rpc('cleardata');
	// if (error) console.log('...', error);
	// console.log('1.  Populating Accounts, Portfolios and Transactions');
	// await initializeAccounts(USER_ID);
	// console.log('2.  Get Asset Class Information for Each Unique Asset');
	// await initializeAssets();
	// console.log('3.  Get Asset Class Information for Each Unique Asset');
	// await initializePrices();
	// console.log('4.  Building Historical Balances & Portfolios');
	// await initializePortfolios(USER_ID);
	console.log('5.  Initialize Database');
	let { error: error2 } = await supabase.rpc('initializedata');
	if (error2) console.log('...', error2);
	console.log('---------------------------------');
}

main();
