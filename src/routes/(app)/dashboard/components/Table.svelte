<script lang="ts">
	/***********************
	 * Component: PortfolioTable
	 * Summary: This Svelte component is responsible for rendering a table displaying the user's portfolios.
	 * Each portfolio is displayed as a row in the table, with columns for name, description, market value,
	 * cost basis, and returns over different time frames. The list of portfolios is received as a prop.
	 ***********************/
	import { color } from '$lib/utils/format';
	import type { Portfolio } from '$types/dashboard';

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
				<td>${row.market_value.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
				<td>${row.cost_basis.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
				<!-- Converting returns to percentages -->
				<td class={color(row.return_year)}>{(row.return_year * 100).toFixed(2)}%</td>
				<td class={color(row.return_month)}>{(row.return_month * 100).toFixed(2)}%</td>
				<td class={color(row.return_week)}>{(row.return_week * 100).toFixed(2)}%</td>
			</tr>
		{/each}
	</tbody>
</table>

<!-- Styling for the table -->
<style lang="postcss">
	table {
		@apply w-full text-xs;
	}

	th:first-child {
		@apply rounded-tl-lg;
	}

	th:last-child {
		@apply rounded-tr-lg;
	}

	tr:last-child td:first-child {
		@apply rounded-bl-lg;
	}

	tr:last-child td:last-child {
		@apply rounded-br-lg;
	}

	td {
		@apply px-2 py-2;
	}

	th {
		@apply bg-indigo-500 px-2 py-2 text-left text-white;
	}

	tr:not(:last-child) {
		@apply border-b-[1px] border-slate-200;
	}

	tr:last-child td {
		@apply border-b-0 bg-slate-200 dark:bg-slate-700;
	}
</style>
