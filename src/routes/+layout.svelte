<script lang="ts">
	import '$styles/app.css';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	import { darkMode } from '$lib/stores/darkMode';
	import { Toggle } from '$components/form';
	import { Toast, Dialog } from '$components/layout';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

{#if $darkMode}
	<div class="fixed bottom-0 left-0 right-0 top-0 -z-50 bg-slate-700" />
	<div class="darkGrid fixed bottom-0 left-0 right-0 top-0 -z-40" />
	<div class="fixed -left-96 -right-96 -top-72 -z-30 h-[600px] -rotate-[10deg] bg-gradient-to-b from-slate-800 to-slate-600 opacity-50" />
	<div class="fixed -left-96 -right-96 top-72 -z-30 h-48 -rotate-[10deg] bg-primary-500 opacity-40" />
{:else}
	<div class="fixed bottom-0 left-0 right-0 top-0 -z-50 bg-slate-50" />
	<div class="lightGrid fixed bottom-0 left-0 right-0 top-0 -z-40" />
	<div class="fixed -left-96 -right-96 -top-72 -z-30 h-[600px] -rotate-[10deg] bg-gradient-to-b from-slate-100 to-slate-200 opacity-50" />
	<div class="fixed -left-96 -right-96 top-72 -z-30 h-48 -rotate-[10deg] bg-primary-300 opacity-20" />
{/if}
<slot />
<Toast />
<Dialog />

<div class="fixed bottom-0 left-0 z-50"><Toggle enabled={$darkMode} onEnable={() => darkMode.set(true)} onDisable={() => darkMode.set(false)} /></div>

<style lang="postcss">
	div.lightGrid {
		background-size: 240px 240px;
		background-image: linear-gradient(to right, rgba(100, 100, 100, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(100, 100, 100, 0.1) 1px, transparent 1px);
	}
	div.darkGrid {
		background-size: 240px 240px;
		background-image: linear-gradient(to right, rgba(100, 100, 100, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(100, 100, 100, 0.3) 1px, transparent 1px);
	}
</style>
