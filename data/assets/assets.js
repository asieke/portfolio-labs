import { supabase } from '../_lib/supabase.js';
import { getFundamentalData } from '../_lib/eod.js';
import { getDataStock } from './classifyStock.js';
import { getDataFund } from './classifyFund.js';
import { getDataETF } from './classifyETF.js';
import { getDataOther } from './classifyOther.js';
import { getDistinctSymbols } from '../_lib/database.js';

export const initializeAssets = async () => {
	//get the unique symbols from the transactions table
	// const symbols = await getDistinctSymbols();

	const symbols = await getDistinctSymbols();

	for (let i = 0; i < symbols.length; i++) {
		const symbol = symbols[i];
		const fundamentalData = await getFundamentalData(symbol);
		const assetData = getAssetData(fundamentalData, symbol);

		//check to make sure assetData.asset_class sums to 100
		const sum = Object.values(assetData.asset_class).reduce((a, b) => a + b, 0);
		console.log('......', symbol, sum);

		//delete from assets where symbol = symbol then insert assetData
		await supabase.from('assets').delete().match({ symbol: symbol });
		await supabase.from('assets').insert(assetData).select();
	}
};

const getAssetData = (data, symbol) => {
	if (!data || !data.General) {
		return getDataOther(data, symbol);
	} else if (data.General.Type === 'Crypto') {
		return getDataOther(data, symbol);
	} else if (data.General.Type === 'Common Stock') {
		return getDataStock(data);
	} else if (data.General.Type === 'FUND') {
		return getDataFund(data);
	} else if (data.General.Type === 'ETF') {
		return getDataETF(data);
	} else {
		return getDataOther(data, symbol);
	}
};
