<script lang="ts">
	/***********************
	 * Component: Summary
	 * Summary: This Svelte component is responsible for rendering a detailed summary of the user's account. This includes
	 * total account value, cost basis, and the returns for the year, month, and week. Each piece of information is displayed
	 * as a row in a "row" div. The component also includes a PieChart of the user's asset allocation and a paragraph giving
	 * a brief description of the portfolio's current state. The account data is received as a prop and is formatted for display.
	 ***********************/

	import { formatCurrency, formatPercent, color } from '$lib/utils/format';
	// import PieChart from '$components/data/PieChart.svelte';
	import type { Portfolio } from '$types/dashboard';
	export let portfolio: Portfolio;
</script>

<div class="row">
	<div class="left">Total Account Value</div>
	<div class="right">{formatCurrency(portfolio.market_value)}</div>
</div>
<div class="row">
	<div class="left">Total Cost Basis</div>
	<div class="right">{formatCurrency(portfolio.cost_basis)}</div>
</div>
<div class="row">
	<div class="left">Yearly Change</div>
	<div class="w-1/2 text-right {color(portfolio.return_year)}">
		{formatPercent(portfolio.return_year)}
	</div>
</div>
<div class="row">
	<div class="left">Monthly Change</div>
	<div class="w-1/2 text-right {color(portfolio.return_month)}">
		{formatPercent(portfolio.return_month)}
	</div>
</div>
<div class="row">
	<div class="left">Weekly Change</div>
	<div class="w-1/2 text-right {color(portfolio.return_week)}">
		{formatPercent(portfolio.return_week)}
	</div>
</div>
<!-- <h3 class="section-header mt-6">My Asset Allocation</h3>
<PieChart data={account.asset_class} /> -->
<p class="mt-3">
	The portfolio currently holds a market value of around $7.6M, a significant increase from the initial investment of
	$2.2M, yielding an impressive year-to-date return of 40.93%. The portfolio is diversified with a major allocation in
	U.S. Equities (46.67%) and Cryptocurrency (36.49%). Week-over-week returns are 0.50%, with a slight dip of -0.39% over
	the past month. Among the benchmarks, Bitcoin showed the highest annual growth of 85.13%, followed by the U.S. Equity
	Total Market and Vanguard 2050 Fund with 16.22% and 11.33% returns, respectively. Past performance does not guarantee
	future results.
</p>

<style lang="postcss">
	.row {
		@apply flex flex-row border-b-[1px] border-slate-200 py-2 text-sm;
	}

	.left {
		@apply w-1/2 text-left text-slate-500 dark:text-slate-400;
	}

	.right {
		@apply w-1/2 text-right text-slate-800 dark:text-slate-200;
	}

	p {
		@apply text-xs leading-5 tracking-tight text-slate-500;
	}
</style>
