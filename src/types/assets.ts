export type AssetClass = {
	name: string;
	total: number;
	color: string;
	breakdown: {
		name: string;
		total: number;
		color: string;
	}[];
};

export type Asset = {
	id: number;
	createdAt?: Date;
	symbol?: string;
	name?: string;
	country?: string;
	description?: string;
	security_type?: string;
	sector?: string;
	industry?: string;
	cusip?: string;
	asset_class: AssetClass[]; // Replace 'any' with the type of the expected JSON structure.
	last_updated?: Date;
	primary_asset_class?: string;
};
