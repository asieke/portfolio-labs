<script lang="ts">
	import { Container } from '$components/layout';
	import { PerformanceChart, PerformanceTable, BenchmarkTable } from '$components/chart';
	import type { Balance } from '$types/balances';
	import { chartSelectedDate, chartSelectedBenchmarks } from '$lib/stores/performanceChart';

	export let data;
	const { portfolios, balances } = data;

	let portfolio_id = portfolios?.[0].id;
	$: displayBalances = balances?.filter((b) => b.portfolio_id === portfolio_id);
</script>

<Container layout="right">
	<div slot="left">
		{#if displayBalances}
			<PerformanceChart balances={displayBalances} />
			<p class="mb-6 mt-6 text-sm font-thin tracking-wide">
				This chart provides a visual comparison of your investment portfolio's performance against selected benchmarks. Each benchmark represents a standard, like a market sector or the overall
				market, which you can use to gauge the effectiveness of your investment strategy. The chart factors in your personal investment activity, including any deposits and withdrawals you've made,
				allowing for a more personalized evaluation. By examining this chart, you can understand how your portfolio would have performed if the same deposits and withdrawals had been made in the
				benchmark investments, offering insights into your investment choices relative to market standards.
			</p>
			<PerformanceTable balances={displayBalances} />
			<p class="mb-6 mt-6 text-sm font-thin tracking-wide">
				This chart provides a visual comparison of your investment portfolio's performance against selected benchmarks. Each benchmark represents a standard, like a market sector or the overall
				market, which you can use to gauge the effectiveness of your investment strategy.
			</p>
		{/if}
	</div>
	<div slot="right">
		<h4>My Portfolios</h4>
		{#if portfolios}
			<select class="w-full" bind:value={portfolio_id}>
				{#each portfolios as portfolio}
					<option value={portfolio.id}>{portfolio.name}</option>
				{/each}
			</select>
		{/if}
		{#if displayBalances}
			<BenchmarkTable balances={displayBalances} />
			<p class="mt-6 text-sm font-thin tracking-wide">
				This data compares the performance of your portfolio against various investment benchmarks, assuming the same deposits and withdrawals were made. The figures represent the dollar value gained
				or lost during a specified period if you had invested in these benchmarks instead of your actual portfolio. In other words, it shows how different investment strategies would have performed
				under the same cash flow conditions as your actual portfolio.
			</p>
		{/if}
	</div>
</Container>
