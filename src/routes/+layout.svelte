<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	$: ({ supabase, session } = data);
	onMount(async () => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, session) => {
			if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
				// delete cookies on sign out
				console.log('user signed out');
				document.cookie = `user-id=${session?.user?.id};`;
			} else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
				console.log('user signed in');
				document.cookie = `user-id=${session?.user?.id};`;
			}
			invalidate('supabase:auth');
		});

		return () => subscription.unsubscribe();
	});
</script>

<slot />
