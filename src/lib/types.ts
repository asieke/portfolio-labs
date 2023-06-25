import type { Database } from './database';

export interface ErrorMessage {
	message?: string;
	errors?: string[];
	// Add null as a possible type
}

export type SchwabTransactionCSV = {
	Action: string;
	Amount: string | null;
	Date: string | null;
	Description: string | null;
	'Fees & Comm': string | null;
	Price: string | null;
	Quantity: string | null;
	Symbol: string | null;
};

export type SchwabPositionCSV = {
	Symbol: string;
	Description: string;
	Quantity: string;
	Price: string;
	'Price Change %': string;
	'Price Change $': string;
	'Market Value': string;
	'Day Change $': string;
	'Day Change %': string;
	'Cost Basis': string;
	'Gain/Loss %': string;
	'Gain/Loss $': string;
	Ratings: string;
	'Reinvest Dividends?': string;
	'Capital Gains?': string;
	'% Of Account': string;
	'Security Type': string;
};

export type AssetAllocationRow = {
	name: string;
	market_value: number;
	asset_class: {
		equity: {
			total: number;
			us: number;
			developed: number;
			emerging: number;
			other: number;
		};
		fixedIncome: {
			total: number;
			general: number;
			usTreasuries: number;
			usMunis: number;
			usCorporates: number;
		};
		realEstate: {
			total: number;
			us: number;
			global: number;
		};
		other: {
			total: number;
			commodities: number;
			crypto: number;
			cash: number;
			other: number;
		};
	};
};

export type ProfilesInsert = Database['public']['Tables']['profiles']['Insert'];
export type ProfilesRow = Database['public']['Tables']['profiles']['Row'];
export type PositionsInsert = Database['public']['Tables']['positions']['Insert'];
export type PortfoliosRow = Database['public']['Tables']['portfolios']['Row'];
export type AccountsRow = Database['public']['Tables']['accounts']['Row'];
