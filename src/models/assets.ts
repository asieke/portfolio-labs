export type AssetClassType = {
	'Equity US': number;
	'Equity Developed': number;
	'Equity Emerging': number;
	'Equity Other': number;
	'Fixed Income General': number;
	'Fixed Income US Treasuries': number;
	'Fixed Income US Munis': number;
	'Fixed Income US Corporates': number;
	'Real Estate US': number;
	'Real Estate Global': number;
	Commodities: number;
	Crypto: number;
	Cash: number;
	Other: number;
} | null;

export const formatAssetClass = (object: AssetClassType) => {
	if (!object) {
		return null;
	}
	return {
		equity: {
			total:
				object['Equity US'] +
				object['Equity Developed'] +
				object['Equity Emerging'] +
				object['Equity Other'],
			us: object['Equity US'],
			developed: object['Equity Developed'],
			emerging: object['Equity Emerging'],
			other: object['Equity Other']
		},
		fixedIncome: {
			total:
				object['Fixed Income General'] +
				object['Fixed Income US Treasuries'] +
				object['Fixed Income US Munis'] +
				object['Fixed Income US Corporates'],
			general: object['Fixed Income General'],
			usTreasuries: object['Fixed Income US Treasuries'],
			usMunis: object['Fixed Income US Munis'],
			usCorporates: object['Fixed Income US Corporates']
		},
		realEstate: {
			total: object['Real Estate US'] + object['Real Estate Global'],
			us: object['Real Estate US'],
			global: object['Real Estate Global']
		},
		other: {
			total: object['Commodities'] + object['Crypto'] + object['Cash'] + object['Other'],
			commodities: object['Commodities'],
			crypto: object['Crypto'],
			cash: object['Cash'],
			other: object['Other']
		}
	};
};
