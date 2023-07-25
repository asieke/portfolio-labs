import type { AssetClass } from '$types/assets';

export type Position = {
	id?: number;
	portfolio_id?: number;
	created_at?: string;
	symbol: string;
	name: string;
	quantity?: number;
	price?: number;
	price_7d?: number;
	price_1d?: number;
	market_value: number;
	market_value_7d: number;
	market_value_1d: number;
	cost_basis: number;
	security_type?: string;
	asset_class?: AssetClass[];
	portfolios?: Record<string, unknown>;
};
