import axios from 'axios';

const getFundamentalData = async (ticker) => {
	//get ticker data from EOD API
	const symbol = ticker.replace('/', '-');
	const url = `https://eodhistoricaldata.com/api/fundamentals/${symbol}?api_token=${process.env.EOD}&fmt=json`;

	try {
		const response = await axios.get(url);
		return response.data;
	} catch (e) {
		return null;
	}
};

const getFundamentalBondData = async (ticker) => {
	const headers = {
		'Content-Type': 'application/json',
		'X-OPENFIGI-APIKEY': process.env.OPENFIGI
	};
	const data = [
		{
			idType: 'ID_CUSIP',
			idValue: ticker
		}
	];
	const response = await axios.post('https://api.openfigi.com/v3/mapping', data, { headers });

	try {
		let data = response.data[0].data[0];
		return data;
	} catch (error) {
		return null;
	}
};

export { getFundamentalData, getFundamentalBondData };
