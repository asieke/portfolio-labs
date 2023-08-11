import { supabase } from '../_lib/supabase.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
	const file = fs.readFileSync(path.resolve(__dirname, './data/historical.tsv'), 'utf8');
	const lines = file.split('\n').map((line) => line.split('\t'));

	const headers = lines.shift();
	const sources = lines.shift();
	const dataRows = lines;

	const result = headers.slice(2).map((header, index) => {
		const prices = dataRows.map((row) => {
			const [year, month] = row;
			return [`${year}-${String(month).padStart(2, '0')}-01`, row[2 + index]];
		});
		return {
			name: header,
			source: sources[2 + index],
			prices: prices
		};
	});

	//delete from benchmark_assets where id > 0;
	//delete from benchmark_prices where id > 0;
	await supabase.from('benchmark_assets').delete().gt('id', 0);
	await supabase.from('benchmark_prices').delete().gt('id', 0);

	for (let i = 0; i < result.length; i++) {
		const { data, error } = await supabase
			.from('benchmark_assets')
			.insert({
				symbol: result[i].source,
				description: result[i].name
			})
			.select();

		const { data: prices, error: pricesError } = await supabase.from('benchmark_prices').insert(
			result[i].prices.map((price) => ({
				asset_id: data[0].id,
				date: price[0],
				price: price[1]
			}))
		);
	}
}

main();
