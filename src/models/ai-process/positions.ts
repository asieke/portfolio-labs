import { addAIContext } from '$lib/stores/ai';
import type { Position } from '$types/positions';

export const dataToContext = (data: Position[]) => {
	let string = 'Symbol\tName\tMarket Value\tCost Basis\tMarket Value (7 days ago)\n';
	string += data.map((p) => [p.symbol, p.name, p.market_value, p.cost_basis, p.market_value_7d].join('\t')).join('\n');

	addAIContext(string);
};
