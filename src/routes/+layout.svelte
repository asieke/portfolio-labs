<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: ({ supabase } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(async (event, session) => {
			invalidate('supabase:auth');
		});

		return () => subscription.unsubscribe();
	});
</script>

<div class="h-18 bg-black text-white">
	<pre class="text-xs w-full whitespace-pre-wrap">
		User: {data?.session?.user?.email}
		Session: {data?.session?.expires_in}
	</pre>
</div>
<slot />
