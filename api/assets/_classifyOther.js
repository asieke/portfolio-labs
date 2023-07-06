import { assetClasses } from './_data.js';

const getOtherData = async (asset, data) => {
	asset.asset_class = { ...assetClasses };

	if (asset.security_type === 'Option') {
		asset.asset_class['Equity US'] = 100;
		asset.security_type = 'Option';
	}

	if (asset.security_type === 'Cash and Money Market' || asset.symbol === 'CASHX') {
		asset.asset_class['Cash'] = 100;
		asset.security_type = 'Cash';
		asset.name = 'Cash and Equivalents';
	}

	if (
		(data && data.General && data.General.Type === 'Crypto') ||
		asset.security_type === 'Crypto'
	) {
		asset.asset_class['Crypto'] = 100;
		asset.name = data.General.Name;
		asset.description = data.General.WebURL;
		asset.security_type = 'crypto';
	}

	return asset;
};

export { getOtherData };
