/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
	const userID = cookies.get('user-id');

	return {
		userID,
		hello: 'world'
	};
}

// const id = session?.user.id;
// const { data: profile, error } = await supabase.from('profiles').select('*').eq('id', id);

// return { user: session?.user, profile: profile ? profile[0] : null };

// if (!session) {
// 	throw redirect(303, '/');
// } else {
// 	// get the user profile from supabase
// 	const { id } = session.user;
// 	try {
// 		const { data: profile, error } = await supabase.from('profiles').select('*').eq('id', id);
// 		if (error) throw error;
// 		return { user: session?.user, profile: profile[0] };
// 	} catch (e) {
// 		console.log('error', e);
// 	}

// //if error redirect to homepage
// if (error) {
// 	throw redirect(303, '/');
// }

// //if there is not a profile for the user_id, then create one
// else if (!profile[0]) {
// 	const { data: newProfile, error: newProfileError } = await supabase
// 		.from('profiles')
// 		.insert([{ id }]);
// 	if (newProfileError || !newProfile) {
// 		throw redirect(303, '/');
// 	} else {
// 		return { user: session?.user, profile: newProfile };
// 	}
// }

// //if user has accepted tos and is active redirect to dashboard
// else if (profile[0].accepted_tos === true && profile[0].is_active === true) {
// 	throw redirect(303, 'dashboard/');
// } else {
// 	return { user: session?.user, profile: profile[0] };
// }
// 	}
// };
