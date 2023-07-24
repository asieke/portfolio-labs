import type { AssetClass } from './assets';

export type Portfolio = {
	id: number;
	account_id: number;
	account_pct: number;
	asset_class: AssetClass[];
	benchmarks_month: Record<string, number>;
	benchmarks_week: Record<string, number>;
	benchmarks_year: Record<string, number>;
	cost_basis: number;
	description: string;
	market_value: number;
	name: string;
	return_month: number;
	return_week: number;
	return_year: number;
	user_id: string;
};
