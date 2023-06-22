<script lang="ts">
	import { Container } from '$components/layout';
	import { formatCurrency, formatPercent } from '$lib/shared/formatters';

	export let data;
	const { account } = data;
</script>

<Container>
	{#if account}
		<table>
			<thead>
				<tr>
					<th>Portfolio</th>
					<th>Market Value</th>
					<th>Equity</th>
					<th>%</th>
					<th>Fixed Income</th>
					<th>%</th>
					<th>Real Estate</th>
					<th>%</th>
					<th>Other</th>
					<th>%</th>
				</tr>
			</thead>
			<tbody>
				{#each account.portfolios as portfolio (portfolio.id)}
					<tr>
						<td>{portfolio.name}</td>
						<td>{formatCurrency(portfolio.market_value)}</td>
						<td>{formatCurrency(portfolio.asset_class.equity.total)}</td>
						<td>{formatPercent(portfolio.asset_class.equity.total / portfolio.market_value)}</td>
						<td>{formatCurrency(portfolio.asset_class.fixedIncome.total)}</td>
						<td
							>{formatPercent(portfolio.asset_class.fixedIncome.total / portfolio.market_value)}</td
						>
						<td>{formatCurrency(portfolio.asset_class.realEstate.total)}</td>
						<td>{formatPercent(portfolio.asset_class.realEstate.total / portfolio.market_value)}</td
						>
						<td>{formatCurrency(portfolio.asset_class.other.total)}</td>
						<td>{formatPercent(portfolio.asset_class.other.total / portfolio.market_value)}</td>
					</tr>
				{/each}
				<tr>
					<td>Total</td>
					<td>{formatCurrency(account.market_value)}</td>
					<td>{formatCurrency(account.asset_class.equity.total)}</td>
					<td>{formatPercent(account.asset_class.equity.total / account.market_value)}</td>
					<td>{formatCurrency(account.asset_class.fixedIncome.total)}</td>
					<td>{formatPercent(account.asset_class.fixedIncome.total / account.market_value)}</td>
					<td>{formatCurrency(account.asset_class.realEstate.total)}</td>
					<td>{formatPercent(account.asset_class.realEstate.total / account.market_value)}</td>
					<td>{formatCurrency(account.asset_class.other.total)}</td>
					<td>{formatPercent(account.asset_class.other.total / account.market_value)}</td>
				</tr>
			</tbody>
		</table>
	{/if}
</Container>

<style lang="postcss">
	table {
		@apply w-full text-xs;
	}

	th,
	td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: center;
	}

	th {
		background-color: #f2f2f2;
	}
</style>
