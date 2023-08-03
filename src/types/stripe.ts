export type StripeProduct = {
	product_id: string;
	name: string;
	description: string | null;
	price_id: string;
	unit_amount: number;
	interval: string;
	yearly_price: number;
};
