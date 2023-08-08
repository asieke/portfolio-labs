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

<Container layout="right">
	<div slot="left">
		{#if displayBalances}
			<PerformanceChart balances={displayBalances} />
			<p class="mb-6 mt-6 text-sm tracking-wide">
				This chart provides a visual comparison of your investment portfolio's performance against selected benchmarks. Each benchmark represents a standard, like a market sector or the overall
				market, which you can use to gauge the effectiveness of your investment strategy. The chart factors in your personal investment activity, including any deposits and withdrawals you've made,
				allowing for a more personalized evaluation. By examining this chart, you can understand how your portfolio would have performed if the same deposits and withdrawals had been made in the
				benchmark investments, offering insights into your investment choices relative to market standards.
			</p>
		{/if}
	</div>
	<div slot="right">
		<h4 class="mb-2">My Portfolios</h4>
		{#if portfolios}
			<select class="mb-8 w-full" bind:value={portfolio_id}>
				{#each portfolios as portfolio}
					<option value={portfolio.id}>{portfolio.name}</option>
				{/each}
			</select>
		{/if}
		{#if displayBalances}
			<PerformanceTable balances={displayBalances} />
			<p class="mb-6 mt-6 text-sm tracking-wide text-slate-500 dark:text-slate-400">
				This chart provides a visual comparison of your investment portfolio's performance against selected benchmarks. Each benchmark represents a standard, like a market sector or the overall
				market, which you can use to gauge the effectiveness of your investment strategy.
			</p>
		{/if}
	</div>
</Container>
