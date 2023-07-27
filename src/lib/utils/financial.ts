export const getCAGR = (roi: number, date: string) => {
	//date is in format yyyy-mm-dd
	//calculate the number of days between date and today
	const today = new Date();
	const start = new Date(date);

	const diff = Math.floor(Math.abs(today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

	console.log('calculating CAGR: ', diff);

	return Math.pow(1 + roi, 365 / diff) - 1;
};
