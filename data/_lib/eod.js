//import the env variables with dotenv
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
import { generateDates } from './utils.js';

const EOD_API_KEY = process.env.EOD;

export const getFundamentalData = async (symbol) => {
	if (symbol === 'CASHX') return null;
	//get ticker data from EOD API
	const code = symbol.replace('/', '-');

	const url = `https://eodhistoricaldata.com/api/fundamentals/${code}?api_token=${EOD_API_KEY}&fmt=json`;

	try {
		const response = await axios.get(url);
		return response.data;
	} catch (e) {
		return null;
	}
};

export const getPriceData = async (symbol, START_DATE) => {
	// Define the API endpoint
	const apiEndpoint = `https://eodhistoricaldata.com/api/eod/${symbol}?api_token=${EOD_API_KEY}&fmt=json&from=${START_DATE}`;

	// Make a GET request to the API
	const response = await axios.get(apiEndpoint);

	// Create a map for efficient date to price lookups
	const datePriceMap = response.data.reduce((map, row) => {
		map[row.date] = row.adjusted_close;
		return map;
	}, {});

	// Generate the dates array
	const dates = generateDates(START_DATE, response.data[response.data.length - 1].date);

	// Generate the output array with dates, symbol, and prices
	let lastPrice = 0;
	const historicalPrices = dates.map((date) => {
		if (datePriceMap[date]) {
			lastPrice = datePriceMap[date] || 0;
		}
		return {
			date,
			symbol,
			price: lastPrice || 0
		};
	});

	//add a field to the historicalPrices array that contains the percent change from the previous day
	historicalPrices.forEach((price, index) => {
		if (index === 0 || historicalPrices[index - 1].price === 0) {
			price.pct = 0;
		} else {
			price.pct = (price.price - historicalPrices[index - 1].price) / historicalPrices[index - 1].price || 0;
		}
	});

	return historicalPrices;
};
