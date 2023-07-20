import { assetClasses } from './_data.js';

export const getDataOther = (data, symbol) => {
	const asset = {
		symbol: symbol,
		asset_class: { ...assetClasses }
	};

	if (asset.symbol === 'CASHX') {
		asset.asset_class['Cash'] = 100;
		asset.security_type = 'Cash';
		asset.name = 'Cash and Equivalents';
		return asset;
	}

	if ((data && data.General && data.General.Type === 'Crypto') || asset.security_type === 'Crypto') {
		asset.asset_class['Crypto'] = 100;
		asset.name = data.General.Name;
		asset.description = data.General.WebURL;
		asset.security_type = 'crypto';
		return asset;
	}

	return asset;
};
