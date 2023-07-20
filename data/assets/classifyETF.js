import { assetClasses } from './_data.js';

const EMERGING = ['Latin America', 'Asia Emerging', 'Asia Developed', 'Europe Emerging', 'Africa/Middle East'];
const DEVELOPED = ['United Kingdom', 'Europe Developed', 'Australasia', 'Japan'];

export const getDataETF = (data) => {
	// implement your logic here
	const asset = {};
	asset.asset_class = { ...assetClasses };

	asset.symbol = data.General.Code;

	if (!data) return asset;

	asset.description = data.General.Description;
	asset.cusip = data.General.CUSIP;
	asset.security_type = 'ETF';
	asset.name = data.General.Name;

	// Check if the Mutual Fund belongs to the Commodities category
	if (data.General.Category.toLowerCase().includes('commodities')) {
		asset.asset_class['Commodities'] = 100;
		return asset;
	}

	// Check if the Mutual Fund belongs to the Digital Assets category
	if (data.General.Category.toLowerCase().includes('digital assets')) {
		asset.asset_class['Crypto'] = 100;
		return asset;
	}

	// Get the parsed allocation data
	const allocation = parseAllocation(data.ETF_Data.Asset_Allocation);

	// Get the percentage of emerging market equity
	const emergingPct = getEmergingPct(data.ETF_Data.World_Regions) || 0;

	//Get the relative weights of the bond asset classes
	if (data.General.Category.toLowerCase().includes('muni')) {
		asset.asset_class['Fixed Income US Munis'] = 1;
	} else if (data.General.Category.toLowerCase().includes('government')) {
		asset.asset_class['Fixed Income US Treasuries'] = 1;
	} else if (data.General.Category.toLowerCase().includes('corporate')) {
		asset.asset_class['Fixed Income US Corporates'] = 1;
	} else {
		asset.asset_class['Fixed Income General'] = 1;
	}

	// Check if the ETF belongs to the Real Estate category
	if (data.General.Category.toLowerCase().includes('real estate')) {
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
	const other =
		100 -
		parseFloat(obj['Cash']['Net_Assets_%'] || 0) -
		parseFloat(obj['Stock US']['Net_Assets_%'] || 0) -
		parseFloat(obj['Stock non-US']['Net_Assets_%'] || 0) -
		parseFloat(obj['Bond']['Net_Assets_%'] || 0);

	return {
		cash: parseFloat(obj['Cash']['Net_Assets_%'] || 0),
		other: other,
		equityUS: parseFloat(obj['Stock US']['Net_Assets_%'] || 0),
		equityGlobal: parseFloat(obj['Stock non-US']['Net_Assets_%'] || 0),
		bond: parseFloat(obj['Bond']['Net_Assets_%'] || 0)
	};
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
		if (EMERGING.includes(region)) {
			emerging += parseFloat(obj[region]['Equity_%']);
		}
		if (DEVELOPED.includes(region)) {
			developed += parseFloat(obj[region]['Equity_%']);
		}
	}
	return emerging / (emerging + developed);
}
