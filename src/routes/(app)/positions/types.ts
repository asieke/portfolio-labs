export type Position = {
	portfolio_id: number;
	symbol: string;
	name: string;
	cost_basis: number;
	market_value: number;
	quantity: number;
	price: number;
};

export type Portfolio = {
	id: number;
	account_id?: number;
	name: string;
	description?: string;
	market_value?: number;
	cost_basis?: number;
	asset_class?: Record<string, number>;
};

export type EODFundamental = {
	General: Record<string, string>;
};
