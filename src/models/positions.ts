import Papa from 'papaparse';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { PositionsInsert, SchwabPositionCSV } from '$lib/types';

interface portfolio {
	name: string;
	positions: PositionsInsert[];
}

interface rawDataType {
	rawName: string;
	rawCSV: string;
}

export const addPositions = async (supabase: SupabaseClient, csv: string, account_id: number) => {
	//use papa parse to parse the csv

	const portfolios: portfolio[] = [];

	const lines = csv.split('\n');
	const rawData: rawDataType[] = [];

	let rawName = '';
	let rawCSV = '';

	for (let i = 0; i < lines.length; i++) {
		//if the first 6 characters of line are "Symbol"
		if (lines[i].substring(0, 6) === 'Symbol') {
			//rawName = lines[i - 1], but only up until the first comma
			rawName = lines[i - 1].split(',')[0];
			rawCSV = lines[i] + '\n';
		} else if (lines[i].substring(0, 7) === 'Account') {
			rawData.push({ rawName, rawCSV });
			rawName = '';
		} else {
			rawCSV += lines[i] + '\n';
		}
	}

	rawData.forEach((section) => {
		const result = Papa.parse<SchwabPositionCSV>(section.rawCSV, {
			header: true,
			skipEmptyLines: true
		});

		const positions: PositionsInsert[] = [];

		result.data.forEach((position: SchwabPositionCSV) => {
			/* if the symbol is any of the following, continue: Futures Positions Market Value, Futures Cash, Account Total */
			if (
				position.Symbol === 'Futures Positions Market Value' ||
				position.Symbol === 'Futures Cash' ||
				position.Symbol === 'Account Total'
			) {
				return;
			}

			positions.push({
				symbol: position.Symbol,
				name: position.Description,
				quantity: parseFloat(position.Quantity.replace(/,/g, '')),
				price: parseFloat(position.Price.replace(/[$,]/g, '')),
				market_value: parseFloat(position['Market Value'].replace(/[$,]/g, '')),
				cost_basis: parseFloat(position['Cost Basis'].replace(/[$,]/g, '')),
				security_type: position['Security Type']
			});
		});

		portfolios.push({
			name: section.rawName,
			positions: positions
		});
	});

	await deletePortfolios(supabase, account_id);

	for (let i = 0; i < portfolios.length; i++) {
		await addPortfolio(supabase, portfolios[i], account_id);
		console.log(portfolios[i].name, '...ADDED');
	}
};

const deletePortfolios = async (supabase: SupabaseClient, account_id: number) => {
	const { error } = await supabase.from('portfolios').delete().match({ account_id: account_id });
	if (error) {
		console.log(error);
	}
};

const addPortfolio = async (supabase: SupabaseClient, portfolio: portfolio, account_id: number) => {
	const { data, error } = await supabase
		.from('portfolios')
		.insert({
			name: portfolio.name,
			account_id: account_id,
			market_value: portfolio.positions.reduce((a, p) => a + (p.market_value || 0), 0),
			cost_basis: portfolio.positions.reduce((a, p) => a + (p.cost_basis || 0), 0)
		})
		.select();

	if (error || !data || data.length === 0) {
		console.log(error);
		return;
	}

	const positions = portfolio.positions.map((p) => ({ ...p, portfolio_id: data[0].id }));

	const { error: positionError } = await supabase.from('positions').insert(positions);

	if (positionError) {
		console.log(error);
		return;
	}
};
