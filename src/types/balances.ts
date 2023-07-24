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
