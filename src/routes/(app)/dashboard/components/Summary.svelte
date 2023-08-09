<script lang="ts">
	/***********************
	 * Component: Summary
	 * Summary: This Svelte component is responsible for rendering a detailed summary of the user's account. This includes
	 * total account value, cost basis, and the returns for the year, month, and week. Each piece of information is displayed
	 * as a row in a "row" div. The component also includes a PieChart of the user's asset allocation and a paragraph giving
	 * a brief description of the portfolio's current state. The account data is received as a prop and is formatted for display.
	 ***********************/

	import { formatCurrency, formatPercent, color } from '$lib/utils/format';
	import { AssetClassPieChart } from '$components/chart';
	import type { Portfolio } from '$types/portfolios';
	export let portfolio: Portfolio;
</script>

<div class="pb-2">
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
</div>

<style lang="postcss">
	.row {
		@apply flex flex-row py-3;
	}

	.row:not(:last-child) {
		@apply border-b-[1px] border-slate-200;
	}

	.left {
		@apply w-1/2 text-left text-slate-500 dark:text-slate-400;
	}

	.right {
		@apply w-1/2 text-right text-slate-800 dark:text-slate-200;
	}
</style>
