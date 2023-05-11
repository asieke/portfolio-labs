<!-- src/routes/logging-in/+page.svelte -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data;
	$: {
		const redirectTo = $page.url.searchParams.get('redirect');

		// check if user has been set in session store then redirect
		if (browser && data.session) {
			goto(redirectTo ?? '/home');
		} else if (browser) {
			goto('/');
		}
	}
</script>

<div class="w-80 sm:w-96 mx-auto">
	<h2 class="mt-[25%]">Loading account data...</h2>
</div>
