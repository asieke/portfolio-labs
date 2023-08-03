// src/routes/+layout.server.ts
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (data) => {
	return {
		session: await data.locals.getSession()
	};
};
