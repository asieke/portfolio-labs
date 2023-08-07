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

export const getDisplayMonth = (date: string) => {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	//split the date into an array
	const dateArray = date.split('-');

	return months[parseInt(dateArray[1]) - 1] + ' ' + dateArray[0];
};

export const timestampToDate = (timestamp: number) => {
	//if millisecond timestamp
	if (timestamp < 1000000000000) {
		timestamp = timestamp * 1000;
	}

	//if second timestamp

	const date = new Date(timestamp);

	return date.toISOString().split('T')[0];
};
