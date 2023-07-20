const assetClasses = {
	'Equity US': 0,
	'Equity Developed': 0,
	'Equity Emerging': 0,
	'Equity Other': 0,
	'Fixed Income General': 0,
	'Fixed Income US Treasuries': 0,
	'Fixed Income US Munis': 0,
	'Fixed Income US Corporates': 0,
	'Real Estate US': 0,
	'Real Estate Global': 0,
	Commodities: 0,
	Crypto: 0,
	Cash: 0,
	Other: 0
};

const cryptoTerms = ['bitcoin', 'crypto asset', 'ethereum', 'blockchain', 'digital currency'];

const countryClassifications = {
	Australia: 'Developed',
	Austria: 'Developed',
	Belgium: 'Developed',
	Canada: 'Developed',
	Denmark: 'Developed',
	Finland: 'Developed',
	France: 'Developed',
	Germany: 'Developed',
	'Hong Kong': 'Developed',
	Ireland: 'Developed',
	Israel: 'Developed',
	Italy: 'Developed',
	Japan: 'Developed',
	Netherlands: 'Developed',
	'New Zealand': 'Developed',
	Norway: 'Developed',
	Portugal: 'Developed',
	Singapore: 'Developed',
	Spain: 'Developed',
	Sweden: 'Developed',
	Switzerland: 'Developed',
	'United Kingdom': 'Developed',
	'United States': 'US',
	Brazil: 'Emerging',
	Chile: 'Emerging',
	China: 'Emerging',
	Colombia: 'Emerging',
	'Czech Republic': 'Emerging',
	Egypt: 'Emerging',
	Greece: 'Emerging',
	Hungary: 'Emerging',
	India: 'Emerging',
	Indonesia: 'Emerging',
	Korea: 'Emerging',
	Kuwait: 'Emerging',
	Malaysia: 'Emerging',
	Mexico: 'Emerging',
	Peru: 'Emerging',
	Philippines: 'Emerging',
	Poland: 'Emerging',
	Qatar: 'Emerging',
	'Saudi Arabia': 'Emerging',
	'South Africa': 'Emerging',
	Taiwan: 'Emerging',
	Thailand: 'Emerging',
	Turkey: 'Emerging',
	'United Arab Emirates': 'Emerging',
	Russia: 'Emerging'
};

export { countryClassifications, cryptoTerms, assetClasses };
