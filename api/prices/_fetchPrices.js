import axios from 'axios';
const FRED_API_KEY = process.env.FRED;
const EOD_API_KEY = process.env.EOD;
const START_DATE = '2008-07-01';

// This function generates an array of dates from 2008-07-01 to today's date
import { generateDates } from '../_lib/_utils.js';

const fetchFredPrices = async () => {
	const url = `https://api.stlouisfed.org/fred/series/observations?series_id=DFF&observation_start=${START_DATE}&api_key=${FRED_API_KEY}&file_type=json`;

	const dates = generateDates(START_DATE);

	try {
		const response = await axios.get(url);
		const observations = response.data.observations;

		return dates.map((date, i) => ({
			symbol: 'CASHX',
			date,
			pct: observations[i]
				? parseFloat(observations[i].value) / 36500
				: parseFloat(observations[observations.length - 1].value) / 36500
		}));
	} catch (error) {
		console.error(`Failed to fetch FRED prices: ${error}`);
		return null;
	}
};

// This function fetches historical prices for a given symbol
const fetchPrices = async (symbol) => {
	console.log('fetching price for ', symbol);

	if (symbol === 'CASHX') {
		let cashPrices = await fetchFredPrices();
		return cashPrices;
	}

	// Define the API endpoint
	const urlSymbol = symbol === 'BTC' ? 'BTC-USD.CC' : symbol;
	const apiEndpoint = `https://eodhistoricaldata.com/api/eod/${urlSymbol}?api_token=${EOD_API_KEY}&fmt=json&from=2008-07-01`;

	// Make a GET request to the API
	const response = await axios.get(apiEndpoint);

	// Create a map for efficient date to price lookups
	const datePriceMap = response.data.reduce((map, row) => {
		map[row.date] = row.adjusted_close;
		return map;
	}, {});

	// Generate the dates array
	const dates = generateDates(START_DATE);

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
			price.pct =
				(price.price - historicalPrices[index - 1].price) / historicalPrices[index - 1].price || 0;
		}
	});

	return historicalPrices;
};

export { fetchPrices };
