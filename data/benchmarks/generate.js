import { supabase } from '../_lib/supabase.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
	// // Read the file 'historical.tsv' from the 'data' directory.
	// const fileContent = fs.readFileSync(path.resolve(__dirname, './data/historical.tsv'), 'utf8');

	// // Split the file content into lines and each line into its columns using tabs.
	// const parsedLines = fileContent.split('\n').map((line) => line.split('\t'));

	// // Extract descriptions and symbols from the first and second lines, respectively.
	// // They start from the third column (index 2).
	// const assetDescriptions = parsedLines[0].slice(2);
	// const assetSymbols = parsedLines[1].slice(2);

	// // Initialize an output array with objects containing asset descriptions, symbols, and a prices placeholder.
	// const assetsData = assetDescriptions.map((description, index) => ({
	// 	description: description,
	// 	symbol: assetSymbols[index],
	// 	prices: []
	// }));

	// // Loop through the remaining lines to extract date (year and month) and prices for each asset.
	// // Start from the third line (index 2).
	// for (let i = 2; i < parsedLines.length; i++) {
	// 	// For each asset, starting from the third column (index 2).
	// 	for (let j = 2; j < assetDescriptions.length + 2; j++) {
	// 		// If there's a price entry for the asset at this date.
	// 		if (parsedLines[i][j] && parsedLines[i][j] !== '') {
	// 			// Construct a date string in the format 'YYYY-MM-01' and add it alongside the price to the asset's prices list.
	// 			assetsData[j - 2].prices.push([parsedLines[i][0] + '-' + parsedLines[i][1] + '-01', parsedLines[i][j]]);
	// 		}
	// 	}
	// }

	// // Delete all entries from the benchmark_assets and benchmark_prices tables where id is greater than 0.
	// await supabase.from('benchmark_assets').delete().gt('id', 0);
	// await supabase.from('benchmark_prices').delete().gt('id', 0);

	// // Loop through the assetsData to load each asset.
	// for (let i = 0; i < assetsData.length; i++) {
	// 	console.log('Loading asset...', assetsData[i].symbol);

	// 	try {
	// 		// Insert the asset into the benchmark_assets table.
	// 		const assetInsertionResponse = await supabase
	// 			.from('benchmark_assets')
	// 			.insert({
	// 				symbol: assetsData[i].symbol,
	// 				description: assetsData[i].description
	// 			})
	// 			.select();

	// 		if (assetInsertionResponse.error) {
	// 			throw assetInsertionResponse.error;
	// 		}

	// 		// Extract the ID of the newly inserted asset.
	// 		const assetId = assetInsertionResponse.data[0].id;
	// 		const assetDescription = assetInsertionResponse.data[0].description;

	// 		// Prepare price data for insertion.
	// 		const priceDataForInsertion = assetsData[i].prices.map((price) => ({
	// 			asset_id: assetId,
	// 			date: price[0],
	// 			price: price[1],
	// 			asset_class: assetDescription
	// 		}));

	// 		// Insert the prices into the benchmark_prices table.
	// 		const priceInsertionResponse = await supabase.from('benchmark_prices').insert(priceDataForInsertion);

	// 		if (priceInsertionResponse.error) {
	// 			throw priceInsertionResponse.error;
	// 		}
	// 	} catch (error) {
	// 		console.error('Error processing asset:', assetsData[i].symbol, error.message);
	// 		// If you want to stop the entire process upon an error, uncomment the line below.
	// 		// throw error;
	// 	}
	// }

	// Get all the prices

	//select order by id and date ASC
	const { data, error } = await supabase.from('benchmark_prices').select('*').order('id', { ascending: true }).order('date', { ascending: true });

	const newPrices = [];

	for (let i = 1; i < data.length; i++) {
		let element = data[i];
		let lag = data[i - 1];

		if (lag.asset_id === element.asset_id) {
			element.pct = (element.price - lag.price) / lag.price;
			newPrices.push(element);
		}
	}

	await supabase.from('benchmark_prices').delete().gt('id', 0);
	await supabase.from('benchmark_prices').insert(newPrices);

	console.log(newPrices);
}

main();
