import { generateDates } from './utils';
import type { Price } from '$types/prices';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const baseURL = `https://eodhistoricaldata.com/api/eod-bulk-last-day/US?api_token=${process.env.EOD}`;

export const getPriceData = async (symbols: string[], startDate: string) => {
	const symbolParams = symbols.filter((s) => s !== 'CASHX').join(',');
	//trim the dates to remove the last date and the first date
	const dates = generateDates(startDate).slice(1, -1);

	const output: Price[] = [];

	for (let i = 0; i < dates.length; i++) {
		const url = baseURL + '&symbols=' + symbolParams + '&date=' + dates[i] + '&fmt=json';
		const { data } = await axios.get(url);
		console.log(dates[i], data);
		output.push(
			...data.map((r: { code: string; close: number; change_p: number; exchange_short_name: string }) => ({
				symbol: r.exchange_short_name === 'CC' ? r.code + '.CC' : r.code,
				date: dates[i],
				price: r.close,
				pct: r.change_p / 100
			}))
		);
	}

	return output;
};
