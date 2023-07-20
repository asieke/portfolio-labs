import { assetClasses, cryptoTerms, countryClassifications } from './_data.js';

export const getDataStock = (data) => {
	// implement your logic here
	// return transformed data

	const asset = {};

	asset.symbol = data.General.Code;
	asset.country = data.General.AddressData?.Country || 'Other';
	asset.description = data.General.Description;
	asset.sector = data.General.Sector;
	asset.industry = data.General.Industry;
	asset.asset_class = { ...assetClasses };
	asset.cusip = data.General.CUSIP;
	asset.security_type = 'Equity';
	asset.name = data.General.Name;
	// Checks if data contains cryptocurrency-related terms
	if (
		cryptoTerms.some(
			(term) =>
				(data.General.Description || '').toLowerCase().includes(term) ||
				(data.General.Name || '').toLowerCase().includes(term)
		)
	) {
		asset.asset_class['Crypto'] = 100;
		return asset;
	}

	// Checks if data's sector is Real Estate
	if (data.General.Sector === 'Real Estate') {
		if (asset.country === 'United States') {
			asset.asset_class['Real Estate US'] = 100;
		} else {
			asset.asset_class['Real Estate Global'] = 100;
		}
		return asset;
	}

	// Check for the country of origin
	const msci = countryClassifications[asset.country];
	if (!msci) {
		asset.asset_class['Equity Other'] = 100;
	} else {
		asset.asset_class[`Equity ${msci}`] = 100;
	}

	return asset;
};
