import { assetClasses } from './_data.js';

const getOtherData = async (asset) => {
	asset.asset_class = { ...assetClasses };

	if (asset.security_type === 'Option') {
		asset.asset_class['Equity US'] = 100;
	}

	if (asset.security_type === 'Cash and Money Market') {
		asset.asset_class['Cash'] = 100;
	}

	if (asset.security_type === 'Crypto') {
		asset.asset_class['Crypto'] = 100;
	}

	if (asset.symbol === 'CASHX') {
		asset.asset_class['Cash'] = 100;
	}

	return asset;
};

export { getOtherData };
