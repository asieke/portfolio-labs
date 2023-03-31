<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import { profileStore } from '$lib/stores/profile';
	import { getProfile } from '$lib/supabaseClient';

	export let data: LayoutData;

	$: ({ supabase } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(async (event, session) => {
			if (event === 'SIGNED_IN' && session) {
				let profile = await getProfile(supabase, session.user.id);
				profileStore.set({ ...profile, id: session.user.id });
				console.log('SIGNING IN!!');
			}

			if (event === 'SIGNED_OUT') {
				profileStore.set(null);
			}

			invalidate('supabase:auth');
		});

		return () => subscription.unsubscribe();
	});
</script>

<div class="h-24 bg-black">asdfasdf</div>
<slot />
