import { assetClasses } from './_data.js';

const getFixedIncomeData = async (asset, data) => {
	asset.asset_class = { ...assetClasses };
	asset.security_type = 'Fixed Income';

	if (data === null) return asset;

	if (data.marketSector === 'Muni') {
		asset.asset_class['Fixed Income US Munis'] = 100;
	} else if (data.marketSector === 'Corp') {
		asset.asset_class['Fixed Income US Corporates'] = 100;
	} else if (data.marketSector === 'Govt') {
		asset.asset_class['Fixed Income US Treasuries'] = 100;
	} else {
		asset.asset_class['Fixed Income General'] = 100;
	}

	asset.cusip = asset.symbol;
	asset.description = data.name;

	return asset;
};

export { getFixedIncomeData };
