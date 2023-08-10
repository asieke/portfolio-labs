<script lang="ts">
	/***********************
	 * Component: Summary
	 * Summary: This Svelte component is responsible for rendering a detailed summary of the user's account. This includes
	 * total account value, cost basis, and the returns for the year, month, and week. Each piece of information is displayed
	 * as a row in a "row" div. The component also includes a PieChart of the user's asset allocation and a paragraph giving
	 * a brief description of the portfolio's current state. The account data is received as a prop and is formatted for display.
	 ***********************/

	import { AssetClassPieChart } from '$components/chart';
	import type { Portfolio } from '$types/portfolios';
	export let portfolio: Portfolio;
</script>

<AssetClassPieChart data={portfolio.asset_class} />
<p class="mt-6 leading-7 text-slate-500">
	The portfolio currently holds a market value of around $7.6M, a significant increase from the initial investment of $2.2M, yielding an impressive year-to-date return of 40.93%. The portfolio is
	diversified with a major allocation in U.S. Equities (46.67%) and Cryptocurrency (36.49%). Week-over-week returns are 0.50%, with a slight dip of -0.39% over the past month. Among the benchmarks,
	Bitcoin showed the highest annual growth of 85.13%, followed by the U.S. Equity Total Market and Fidelity 2050 Fund with 16.22% and 11.33% returns, respectively. Past performance does not guarantee
	future results.
</p>
