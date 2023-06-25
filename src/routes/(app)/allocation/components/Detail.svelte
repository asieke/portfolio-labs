<script lang="ts">
	import { formatCurrency, formatPercent } from '$lib/shared/formatters';
	import type { AssetAllocationRow } from '$lib/types';
	import Chart from './Chart.svelte';

	export let detailRow: AssetAllocationRow;
	export let goBack: () => void;
</script>

<div class="sm:flex-auto mb-10">
	<h1 class="text-base font-semibold leading-6 text-gray-900">Asset Allocation Detail</h1>
	<p class="mt-2 text-sm text-gray-700">
		<button on:click={() => goBack()}>All Portfolios</button> > {detailRow.name}
	</p>
</div>

<Chart {detailRow} />

<style lang="postcss">
	button {
		@apply cursor-pointer hover:underline;
	}
</style>
