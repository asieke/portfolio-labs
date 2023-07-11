<script lang="ts">
	import { onMount } from 'svelte';
	import { Container } from '$components/layout';
	import PositionsTable from './components/PositionsTable.svelte';
	import PositionDetail from './components/PositionDetail.svelte';
	import type { Position } from './types';

	export let data;
	let portfolio_id: number = -1;
	let selectedPosition: Position | null = null;

	const { accounts, portfolios, positions } = data;

	console.log(portfolios);

	let displayPositions = positions.filter((p) => p.portfolio_id === -1);

	const updateTable = () => {
		console.log('Updating Table to ', portfolio_id);
		displayPositions = positions.filter((p) => {
			return p.portfolio_id == portfolio_id;
		});
	};

	const showDetail = (position: Position) => {
		console.log('showing detail', position);
		selectedPosition = position;
	};

	const exitDetail = () => {
		selectedPosition = null;
	};
</script>

{#if !selectedPosition}
	<div class="main max-w-6xl mx-auto">
		<select class="w-1/4" bind:value={portfolio_id} on:change={updateTable}>
			{#each portfolios as portfolio}
				<option value={portfolio.id}>{portfolio.name}</option>
			{/each}
		</select>
		<PositionsTable {displayPositions} {showDetail} />
	</div>
{:else}
	<PositionDetail {selectedPosition} {exitDetail} />
{/if}

<style lang="postcss">
	.main {
		@apply rounded-lg p-6 lg:px-10 lg:py-8 bg-slate-50;
	}
</style>
