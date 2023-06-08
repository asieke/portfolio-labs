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

export type ProfilesInsert = Database['public']['Tables']['profiles']['Insert'];
export type ProfilesRow = Database['public']['Tables']['profiles']['Row'];
export type TransactionsInsert = Database['public']['Tables']['transactions']['Insert'];
export type PositionsInsert = Database['public']['Tables']['positions']['Insert'];
