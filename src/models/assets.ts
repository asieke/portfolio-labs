import colors from 'tailwindcss/colors';
export const formatAssetClass = (obj: Record<string, number>) => {
	const output = [
		{
			name: 'Equities',
			total: obj['Equity US'] + obj['Equity Other'] + obj['Equity Emerging'] + obj['Equity Developed'],
			color: colors['sky']['600'],
			breakdown: [
				{
					name: 'US',
					total: obj['Equity US'],
					color: colors['sky']['500']
				},
				{
					name: 'Other',
					total: obj['Equity Other'],
					color: colors['sky']['200']
				},
				{
					name: 'Emerging',
					total: obj['Equity Emerging'],
					color: colors['sky']['300']
				},
				{
					name: 'Developed',
					total: obj['Equity Developed'],
					color: colors['sky']['400']
				}
			]
		},
		{
			name: 'Real Estate',
			total: obj['Real Estate US'] + obj['Real Estate Global'],
			color: colors['violet']['500'],
			breakdown: [
				{
					name: 'US',
					total: obj['Real Estate US'],
					color: colors['violet']['400']
				},
				{
					name: 'Global',
					total: obj['Real Estate Global'],
					color: colors['violet']['500']
				}
			]
		},
		{
			name: 'Fixed Income',
			total:
				obj['Fixed Income General'] +
				obj['Fixed Income US Munis'] +
				obj['Fixed Income US Corporates'] +
				obj['Fixed Income US Treasuries'],
			color: colors['emerald']['500'],
			breakdown: [
				{
					name: 'General',
					total: obj['Fixed Income General'],
					color: colors['emerald']['300']
				},
				{
					name: 'US Munis',
					total: obj['Fixed Income US Munis'],
					color: colors['emerald']['500']
				},
				{
					name: 'US Corporates',
					total: obj['Fixed Income US Corporates'],
					color: colors['emerald']['300']
				},
				{
					name: 'US Treasuries',
					total: obj['Fixed Income US Treasuries'],
					color: colors['emerald']['400']
				}
			]
		},
		{
			name: 'Other',
			total: obj['Cash'] + obj['Other'] + obj['Crypto'] + obj['Commodities'],
			color: colors['gray']['500'],
			breakdown: [
				{
					name: 'Cash',
					total: obj['Cash'],
					color: colors['gray']['100']
				},
				{
					name: 'Other',
					total: obj['Other'],
					color: colors['gray']['200']
				},
				{
					name: 'Crypto',
					total: obj['Crypto'],
					color: colors['gray']['300']
				},
				{
					name: 'Commodities',
					total: obj['Commodities'],
					color: colors['gray']['400']
				}
			]
		}
	];

	return output;
};
