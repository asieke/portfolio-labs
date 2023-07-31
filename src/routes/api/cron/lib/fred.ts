//import the env variables with dotenv
import dotenv from 'dotenv';
import axios from 'axios';
import { generateDates } from './utils.js';

dotenv.config();

const FRED_API_KEY = process.env.FRED;

export const getFredData = async (START_DATE: string) => {
	//get a date three days before START_DATE
	const date = new Date(START_DATE);
	date.setDate(new Date(START_DATE).getDate() - 3);
	const START = date.toISOString().split('T')[0];

	const url = `https://api.stlouisfed.org/fred/series/observations?series_id=DFF&observation_start=${START}&api_key=${FRED_API_KEY}&file_type=json`;

	try {
		const response = await axios.get(url);
		const observations = response.data.observations;
		observations[0].value = 0;

		const dates = generateDates(START);

		return dates
			.map((date, i) => ({
				symbol: 'CASHX',
				date,
				pct: observations[i] ? parseFloat(observations[i].value) / 36500 : parseFloat(observations[observations.length - 1].value) / 36500
			}))
			.slice(4, -1);
	} catch (error) {
		console.error(`Failed to fetch FRED prices: ${error}`);
		return null;
	}
};
