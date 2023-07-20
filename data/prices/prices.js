import { supabase } from '../_lib/supabase.js';
import { getDistinctSymbols } from '../_lib/database.js';

import { getPriceData } from '../_lib/eod.js';
import { getFredData } from '../_lib/fred.js';
import { benchmarkSymbols } from '../_lib/database.js';

const START = '2008-01-01';

export const initializePrices = async () => {
	const symbols = [...benchmarkSymbols, ...(await getDistinctSymbols())];

	for (let i = 0; i < symbols.length; i++) {
		const symbol = symbols[i];
		const priceData = symbol === 'CASHX' ? await getFredData(START) : await getPriceData(symbol, START);

		//delete from prices where symbol = symbol then insert priceData
		await supabase.from('prices').delete().match({ symbol: symbol });
		await supabase.from('prices').insert(priceData);

		console.log('......', symbol, priceData.length);
	}
};
