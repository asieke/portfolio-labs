<script lang="ts">
	import { Container } from '$components/layout';
	import { PerformanceChart, PerformanceTable, BenchmarkTable } from '$components/chart';
	import type { Balance } from '$types/balances';
	import { chartSelectedDate, chartSelectedBenchmarks } from '$lib/stores/performanceChart';
	import { addAIContext } from '$lib/stores/ai';

	export let data;
	const { portfolios, balances } = data;

	addAIContext(`Your performance has been amazing.  Account Summary Total Account Value $9,051,313.86 Total Cost Basis  $2,318,854.11 Yearly Change 38.87% Monthly Change 0.27% Weekly Change 0.08%`);

	let portfolio_id = portfolios?.[0].id;
	$: displayBalances = balances?.filter((b) => b.portfolio_id === portfolio_id);
</script>

<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
	<div class="lg-order-1 order-2 col-span-2">
		<Container>
			{#if displayBalances}
				<PerformanceChart balances={displayBalances} />
			{/if}
		</Container>
	</div>
	<div class="order-1 lg:order-2">
		<Container>
			<h3 class="mb-4">My Portfolios</h3>
			{#if portfolios}
				<select class="mb-8 w-full" bind:value={portfolio_id}>
					{#each portfolios as portfolio}
						<option value={portfolio.id}>{portfolio.name}</option>
					{/each}
				</select>
			{/if}
			{#if displayBalances}
				<div class="text-xs">
					<PerformanceTable balances={displayBalances} />
				</div>
			{/if}
		</Container>
	</div>
</div>
<div class="h-[200px]" />
