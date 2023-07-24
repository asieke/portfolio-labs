export type Position = {
	id: number;
	portfolio_id: number;
	created_at: string;
	symbol: string;
	name: string;
	quantity: number;
	price: number;
	market_value: number;
	cost_basis: number;
	security_type: string;
	asset_class: Record<string, number>;
	price_7d: number;
	portfolios: Record<string, unknown>;
};
