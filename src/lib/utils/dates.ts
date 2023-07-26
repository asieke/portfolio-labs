export const chartDates = [
	{
		label: 'Max',
		value: '2000-01-01'
	},
	{
		label: '10Y',
		value: new Date(new Date().setFullYear(new Date().getFullYear() - 10)).toISOString().split('T')[0]
	},
	{
		label: '5Y',
		value: new Date(new Date().setFullYear(new Date().getFullYear() - 5)).toISOString().split('T')[0]
	},
	{
		label: '1Y',
		value: new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().split('T')[0]
	},
	{
		label: 'YTD',
		//value is January 1 of the current year
		value: new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0]
	},
	{
		label: '6M',
		value: new Date(new Date().setMonth(new Date().getMonth() - 6)).toISOString().split('T')[0]
	},
	{
		label: '1M',
		value: new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().split('T')[0]
	}
];

export const getDateGranularity = (start: string, end: string) => {
	//the dates are formatted like '2022-01-01',
	//calculate the difference in days between the two dates
	const diff = Math.floor((new Date(end).getTime() - new Date(start).getTime()) / (1000 * 60 * 60 * 24));

	return diff;
};
