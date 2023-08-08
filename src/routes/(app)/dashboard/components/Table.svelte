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
<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
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
				<td>{row.description}</td>
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

<!-- Styling for the table -->
<style lang="postcss">
	table {
		@apply w-full text-slate-500;
	}

	th:first-child {
		@apply rounded-tl-md;
	}

	th:last-child {
		@apply rounded-tr-md;
	}

	tr:last-child td:first-child {
		@apply rounded-bl-md;
	}

	tr:last-child td:last-child {
		@apply rounded-br-md;
	}

	td {
		@apply px-2 py-3;
	}

	th {
		@apply bg-primary-500 px-2 py-1 text-left text-white dark:bg-primary-800;
	}

	tr:not(:last-child) {
		@apply border-b-[1px] border-slate-200;
	}

	tr:last-child td {
		@apply border-b-0 bg-slate-200 dark:bg-slate-800;
	}
</style>
