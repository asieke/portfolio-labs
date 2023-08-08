import { getPriceData } from './lib/eod';
import { getFredData } from './lib/fred';

import dotenv from 'dotenv';
dotenv.config();

export const POST = async (req) => {
	const supabase = req.locals.supabase;
	const apiKey = req.request.headers.get('x-api-key');

	if (!supabase || apiKey !== process.env.PRIVATE_API_KEY) {
		return new Response('Unauthorized', { status: 401 });
	}

	//get the maximum date from the prices table
	const { data: symbols, error: error1 } = await supabase.rpc('select_prices_unique_symbol');
	if (error1) return new Response(error1.message, { status: 500 });

	const { data: maxDate, error: error2 } = await supabase.rpc('select_prices_max_date');
	if (error2) return new Response(error2.message, { status: 500 });

	const startDate = maxDate[0].max;

	await supabase.from('prices').delete().gt('date', startDate);

	const prices = await getPriceData(symbols.map((r: Record<string, string>) => r.symbol) as string[], startDate);
	const cash = await getFredData(maxDate[0].max);

	if (prices && cash) {
		const { error } = await supabase.from('prices').insert([...prices, ...cash]);
		if (error) return new Response(error.message, { status: 500 });
	}

	return new Response(JSON.stringify({ success: true }));
};
