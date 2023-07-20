import { assetClasses } from './_data.js';

const EMERGING = ['Latin America', 'Asia Emerging', 'Europe Emerging', 'Asia Developed', 'Africa/Middle East'];
const DEVELOPED = ['United Kingdom', 'Europe Developed', 'Australasia', 'Japan'];

export const getDataFund = (data) => {
	// implement your logic here
	// return transformed data

	const asset = {};
	asset.asset_class = { ...assetClasses };

	if (!data) return asset;

	asset.symbol = data.General.Code;
	asset.description = data.General.Fund_Summary;
	asset.cusip = data.General.CUSIP;
	asset.security_type = 'Mutual Fund';
	asset.name = data.General.Name;

	// Check if the Mutual Fund belongs to the Commodities category
	if (data.General.Fund_Category.toLowerCase().includes('commodities')) {
		asset.asset_class['Commodities'] = 100;
		return asset;
	}

	// Check if the Mutual Fund belongs to the Digital Assets category
	if (data.General.Fund_Category.toLowerCase().includes('digital assets')) {
		asset.asset_class['Crypto'] = 100;
		return asset;
	}

	const allocation = parseAllocation(data.MutualFund_Data.Asset_Allocation);

	// Get the percentage of emerging market equity
	const emergingPct = getEmergingPct(data.MutualFund_Data.World_Regions) || 0;

	//Get the relative weights of the bond asset classes
	if (data.General.Fund_Category.toLowerCase().includes('muni')) {
		asset.asset_class['Fixed Income US Munis'] = 1;
	} else if (data.General.Fund_Category.toLowerCase().includes('government')) {
		asset.asset_class['Fixed Income US Treasuries'] = 1;
	} else if (data.General.Fund_Category.toLowerCase().includes('corporate')) {
		asset.asset_class['Fixed Income US Corporates'] = 1;
	} else {
		asset.asset_class['Fixed Income General'] = 1;
	}

	// Check if the ETF belongs to the Real Estate category
	if (data.General.Fund_Category.toLowerCase().includes('real estate')) {
		asset.asset_class['Real Estate US'] = allocation.equityUS || 0;
		asset.asset_class['Real Estate Global'] = allocation.equityGlobal || 0;
	} else {
		asset.asset_class['Equity US'] = allocation.equityUS || 0;
		asset.asset_class['Equity Developed'] = (allocation.equityGlobal || 0) * (1 - emergingPct);
		asset.asset_class['Equity Emerging'] = (allocation.equityGlobal || 0) * emergingPct;
	}

	// fill in fixed income
	asset.asset_class['Fixed Income US Munis'] *= allocation.bond || 0;
	asset.asset_class['Fixed Income US Treasuries'] *= allocation.bond || 0;
	asset.asset_class['Fixed Income US Corporates'] *= allocation.bond || 0;
	asset.asset_class['Fixed Income General'] *= allocation.bond || 0;
	asset.asset_class['Cash'] = allocation.cash || 0;
	asset.asset_class['Other'] = allocation.other || 0;

	return asset;
};

/**************************************
 * Description: Parses allocations for a given object and returns the parsed values.
 * Parameters: obj - the object to parse
 * Returns: An object containing the parsed values for Cash, Other, Equity US, Equity Global, and Bond.
 **************************************/
function parseAllocation(obj) {
	const output = {};

	for (const key in obj) {
		const type = obj[key].Type;
		const pct = parseFloat(obj[key]['Net_%'] || 0);
		// switch on type, add to output
		if (type === 'Cash') {
			output.cash = pct;
		} else if (type === 'US Stock') {
			output.equityUS = pct;
		} else if (type === 'Non US Stock') {
			output.equityGlobal = pct;
		} else if (type === 'Bond') {
			output.bond = pct;
		} else {
			output.other = (output.other || 0) + pct;
		}
	}

	return output;
}

/**************************************
 * Description: Calculates the percent of equity invested in emerging markets based on a given object
 * Parameters: obj - an object containing regions and their associated equity percentages
 * Returns: A float representing the percentage of equity invested in emerging markets
 **************************************/

function getEmergingPct(obj) {
	let emerging = 0;
	let developed = 0;
	for (const region in obj) {
		for (const subregion in obj[region]) {
			const name = obj[region][subregion].Name;
			if (EMERGING.includes(name)) {
				emerging += parseFloat(obj[region][subregion]['Stocks_%']);
			}
			if (DEVELOPED.includes(name)) {
				developed += parseFloat(obj[region][subregion]['Stocks_%']);
			}
		}
	}
	return emerging / (emerging + developed) || 0;
}
