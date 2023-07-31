<script lang="ts">
	import { Container } from '$components/layout';
	import Chart from './components/Chart.svelte';
	import Table from './components/Table.svelte';
	import type { AssetClass } from '$types/assets';

	export let data;
	const { portfolios, profile } = data;

	let id = 0;
	let assetClasses: AssetClass[] = [];

	$: {
		assetClasses = portfolios?.[id].asset_class || [];
	}
</script>

<Container>
	<h4>My Asset Allocation</h4>

	{#if portfolios}
		<select class="w-full" bind:value={id}>
			{#each portfolios as portfolio, i}
				<option value={i}>{portfolio.name}</option>
			{/each}
		</select>
	{/if}

	<Chart data={assetClasses} />
	<Table data={assetClasses} targets={profile?.allocation_targets} />
</Container>
