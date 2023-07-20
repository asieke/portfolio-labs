export type Balance = {
	portfolio_id: number;
	date: string;
	start_balance: number;
	end_balance: number;
	start_benchmarks: Record<string, number>;
	end_benchmarks: Record<string, number>;
	total_flows: number;
	pct: number;
	id: number;
	benchmark_returns: Record<string, number>;
};

export type Portfolio = {
	account_id: number;
	account_pct: number;
	asset_class: Record<string, number>;
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
