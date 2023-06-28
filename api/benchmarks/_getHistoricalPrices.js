import axios from 'axios';

const EOD_API_KEY = process.env.EOD;
const FRED_API_KEY = process.env.FRED;
const START_DATE = '2000-01-03';

/**
 * Fetches equity prices for a given symbol
 * @param {string} symbol - The symbol for which equity prices are needed
 * @returns {object} An object with date keys and corresponding equity prices
 */
const fetchEquityPrices = async (symbol) => {
	const url = `https://eodhistoricaldata.com/api/eod/${symbol}?api_token=${EOD_API_KEY}&from=${START_DATE}&fmt=json`;

	try {
		const response = await axios.get(url);
		const prices = {};

		response.data.forEach((obj) => {
			prices[obj.date] = obj.adjusted_close;
		});

		return prices;
	} catch (error) {
		console.error(`Failed to fetch equity prices: ${error}`);
		return null;
	}
};

/**
 * Fetches cryptocurrency prices, specifically Bitcoin prices
 * @returns {object} An object with date keys and corresponding Bitcoin prices
 */
const fetchCryptoPrices = async () => {
	const url = `https://eodhistoricaldata.com/api/eod/BTC-USD.CC?api_token=${EOD_API_KEY}&order=d&fmt=json`;

	try {
		const response = await axios.get(url);
		const btcPrices = {};
		response.data.forEach((obj) => {
			btcPrices[obj.date] = obj.adjusted_close;
		});

		const prices = { '2010-07-17': 1 };
		let yesterday = new Date('2010-07-17');
		let today = new Date('2010-07-18');
		let endDate = new Date();
		endDate.setDate(endDate.getDate() - 1);

		// Populate prices with adjusted Bitcoin prices
		while (today <= endDate) {
			let ys = yesterday.toISOString().slice(0, 10);
			let ts = today.toISOString().slice(0, 10);
			prices[ts] = prices[ys] * (btcPrices[ts] / btcPrices[ys]);

			yesterday.setDate(yesterday.getDate() + 1);
			today.setDate(today.getDate() + 1);
		}

		return prices;
	} catch (error) {
		console.error(`Failed to fetch crypto prices: ${error}`);
		return null;
	}
};

/**
 * Fetches prices from the FRED API
 * @returns {object} An object with date keys and corresponding FRED prices
 */
const fetchFredPrices = async () => {
	const url = `https://api.stlouisfed.org/fred/series/observations?series_id=DFF&observation_start=${START_DATE}&api_key=${FRED_API_KEY}&file_type=json`;

	try {
		const response = await axios.get(url);

		const observations = response.data.observations;

		const prices = {};
		prices[START_DATE] = 10000;

		// Populate prices with adjusted FRED prices
		for (let i = 1; i < observations.length; i++) {
			const obj = observations[i];
			const prevObj = observations[i - 1];
			prices[obj.date] = prices[prevObj.date] * (1 + obj.value / 100 / 365);
		}

		return prices;
	} catch (error) {
		console.error(`Failed to fetch FRED prices: ${error}`);
		return null;
	}
};

/**
 * Fetches historical prices based on asset class
 * @param {string} symbol - The symbol of the asset
 *
 * @param {string} assetClass - The class of the asset
 * @returns {Array} An array of objects, each containing date, asset class, symbol, price, and percentage change
 */
const fetchHistoricalPrices = async (symbol, assetClass) => {
	let prices;

	try {
		// Select the correct fetch function based on the symbol
		if (symbol === 'Cash') {
			prices = await fetchFredPrices();
		} else if (symbol === 'BTC') {
			prices = await fetchCryptoPrices();
		} else {
			prices = await fetchEquityPrices(symbol);
		}
	} catch (error) {
		console.error(`Failed to fetch historical prices: ${error}`);
		return null;
	}

	// Use a reducer on Object.keys to find the minimum key
	const minDate = Object.keys(prices).reduce((a, b) => (a < b ? a : b));

	const data = [];

	let currentDate = new Date(minDate);
	let endDate = new Date();

	// Populate data with price information for each day
	while (currentDate <= endDate) {
		const date = currentDate.toISOString().slice(0, 10);
		data.push({
			date: date,
			asset_class: assetClass,
			symbol: symbol,
			price: prices[date] || data[data.length - 1]?.price || 0
		});
		data[data.length - 1].pct =
			data.length > 1 ? data[data.length - 1].price / data[data.length - 2].price - 1 : 0;
		currentDate.setDate(currentDate.getDate() + 1);
	}

	return data;

	// Insert data into the benchmarks table in Supabase
};

export { fetchHistoricalPrices };
