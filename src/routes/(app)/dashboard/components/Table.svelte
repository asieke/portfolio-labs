<script lang="ts">
	/***********************
	 * Component: PortfolioTable
	 * Summary: This Svelte component is responsible for rendering a table displaying the user's portfolios.
	 * Each portfolio is displayed as a row in the table, with columns for name, description, market value,
	 * cost basis, and returns over different time frames. The list of portfolios is received as a prop.
	 ***********************/
	import { color } from '$lib/utils/format';
	import type { Portfolio } from '$types/portfolios';
	import { formatCurrency, formatPercent } from '$lib/utils/format';

	export let portfolios: Portfolio[];
</script>

<!-- Portfolio table -->
<table class="data text-table">
	<thead>
		<tr>
			<th>Name</th>
			<th>Market Value</th>
			<th>Cost Basis</th>
			<th>Return (Year)</th>
			<th>Return (Month)</th>
			<th>Return (Week)</th>
		</tr>
	</thead>
	<!-- Iterating over each portfolio and creating a row for it -->
	<tbody>
		{#each portfolios as row}
			<tr>
				<!-- Portfolio details -->
				<td>{row.name}</td>
				<!-- Formatting numbers for better readability -->
				<td>{formatCurrency(row.market_value, 0)}</td>
				<td>{formatCurrency(row.cost_basis, 0)}</td>
				<!-- Converting returns to percentages -->
				<td class={color(row.return_year)}>{formatPercent(row.return_year, 1)}</td>
				<td class={color(row.return_month)}>{formatPercent(row.return_month, 1)}</td>
				<td class={color(row.return_week)}>{formatPercent(row.return_week, 1)}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="postcss">
	tbody tr:last-child {
		@apply bg-slate-100 dark:bg-slate-800;
	}
</style>
