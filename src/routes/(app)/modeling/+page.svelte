<script lang="ts">
	import { Container } from '$components/layout';
	import { PerformanceChart, PerformanceTable } from '$components/chart';
	import { chartSelectedDate, chartSelectedBenchmarks } from '$lib/stores/performanceChart';
	import { onMount } from 'svelte';
	import type { Portfolio } from '$types/portfolios';
	import type { Balance } from '$types/balances';
	import { getPortfolios } from '$models/portfolios';
	import { getDailyBalancesCached } from '$models/balances';

	export let data;
	const { supabase, session } = data;

	let portfolios: Portfolio[] | null = null;
	let balancesWeekly: Balance[] | null = null;
	let portfolio_id: number | null = null;
	$: displayBalances = balancesWeekly?.filter((b) => b.portfolio_id === portfolio_id);

	onMount(async () => {
		if (session) {
			// Fetch portfolios and balances for the current user
			portfolios = await getPortfolios(supabase, session.user.id);
			balancesWeekly = await getDailyBalancesCached(supabase, session.user.id);
			portfolio_id = portfolios?.[0].id || null;
		}
	});
</script>

<Container layout="right">
	<div slot="left">
		{#if displayBalances}
			<PerformanceChart balances={displayBalances} />
			<p class="mt-6 text-sm font-thin tracking-wide">
				This chart provides a visual comparison of your investment portfolio's performance against selected benchmarks. Each benchmark represents a standard, like a market sector or the overall
				market, which you can use to gauge the effectiveness of your investment strategy. The chart factors in your personal investment activity, including any deposits and withdrawals you've made,
				allowing for a more personalized evaluation. By examining this chart, you can understand how your portfolio would have performed if the same deposits and withdrawals had been made in the
				benchmark investments, offering insights into your investment choices relative to market standards.
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
			<PerformanceTable balances={displayBalances} />
			<p class="mt-6 text-sm font-thin tracking-wide">
				This data compares the performance of your portfolio against various investment benchmarks, assuming the same deposits and withdrawals were made. The figures represent the dollar value gained
				or lost during a specified period if you had invested in these benchmarks instead of your actual portfolio. In other words, it shows how different investment strategies would have performed
				under the same cash flow conditions as your actual portfolio.
			</p>
		{/if}
	</div>
</Container>
