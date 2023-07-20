//import the env variables with dotenv
import dotenv from 'dotenv';
import axios from 'axios';
import { generateDates } from './utils.js';

dotenv.config();

const FRED_API_KEY = process.env.FRED;

export const getFredData = async (START_DATE) => {
	const url = `https://api.stlouisfed.org/fred/series/observations?series_id=DFF&observation_start=${START_DATE}&api_key=${FRED_API_KEY}&file_type=json`;

	try {
		const response = await axios.get(url);
		const observations = response.data.observations;
		observations[0].value = 0;

		const dates = generateDates(START_DATE, observations[observations.length - 1].date);

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
