//establish balance types
export type Balance = {
	date: string;
	balance: number;
	benchmarks: Record<string, number>;
	flows: number;
	portfolio_id: number;
};

export type Portfolio = {
	name: string;
	description: string;
	// Add other properties if needed
};

export type BalanceYearly = {
	portfolio_id: number;
	year: number;
	start_balance: number;
	end_balance: number;
	start_benchmarks: Record<string, number>;
	end_benchmarks: Record<string, number>;
	total_flows: number;
};

export type ComponentProps = {
	portfolios: Record<string, Portfolio>;
	balances: Record<string, Balance[]>;
	balancesYearly: Record<string, BalanceYearly[]>;
	labels: string[];
};
