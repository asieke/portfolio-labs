<script lang="ts">
	import { Container } from '$components/layout';
	import { PerformanceChart } from '$components/chart';
	import type { Balance } from '$types/balances';

	export let data;
	const { portfolios, balancesWeekly } = data;

	let portfolio_id = portfolios?.[0].id;
	$: displayBalances = balancesWeekly?.filter((b) => b.portfolio_id === portfolio_id);
</script>

<Container layout="right">
	<div slot="left">
		<h4>My Performance</h4>
		{#if displayBalances}
			<PerformanceChart balances={displayBalances} />
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
	</div>
</Container>
