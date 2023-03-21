export type Format = 'string' | 'number' | 'percent' | 'currency';
export type Type = 'string' | 'number';

//create a type for chartData
export type DataType = {
	headers: string[];
	colors: string[];
	types: Type[];
	formats: Format[];
	data: (string | number)[][];
};
