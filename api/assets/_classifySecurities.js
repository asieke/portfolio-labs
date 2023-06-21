import { getFundamentalBondData, getFundamentalData } from './_eod.js';
import { getFixedIncomeData } from './_classifyFixedIncome.js';
import { getMutualFundData } from './_classifyMutualFund.js';
import { getEquityData } from './_classifyEquities.js';
import { getETFData } from './_classifyETF.js';
import { getOtherData } from './_classifyOther.js';

const classifySecurities = async (supabase, assets) => {
	console.log('----------------------');
	console.log('Classifying Securities');
	console.log('----------------------');

	for (let i = 0; i < assets.length; i++) {
		console.log('classifying... ', assets[i].symbol);
		let newRow = {};
		if (assets[i].security_type === 'Fixed Income') {
			const data = await getFundamentalBondData(assets[i].symbol);
			newRow = await getFixedIncomeData(assets[i], data);
		} else if (
			assets[i].security_type === 'Crypto' ||
			assets[i].security_type === 'Cash and Money Market'
		) {
			newRow = await getOtherData(assets[i]);
		} else {
			const data = await getFundamentalData(assets[i].symbol);
			if (!data || !data.General) {
				newRow = await getOtherData(assets[i]);
			} else if (data.General.Type === 'Common Stock') {
				newRow = await getEquityData(assets[i], data);
			} else if (data.General.Type === 'FUND') {
				newRow = await getMutualFundData(assets[i], data);
			} else if (data.General.Type === 'ETF') {
				newRow = await getETFData(assets[i], data);
			} else {
				newRow = await getOtherData(assets[i]);
			}
		}

		//use supabase to update the row
		const { error } = await supabase.from('assets').update(newRow).eq('id', newRow.id);
		if (error) {
			console.log(error);
		} else {
			console.log('Updated', newRow.symbol);
		}
	}

	console.log('----------------------');
};

export { classifySecurities };
