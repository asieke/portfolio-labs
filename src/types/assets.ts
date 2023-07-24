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
