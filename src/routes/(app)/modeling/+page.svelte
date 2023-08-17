<script lang="ts">
	import { Container } from '$components/layout';
	import Draggable from './components/Draggable.svelte';
	import EventSelector from './components/EventSelector.svelte';
	import Graph from './components/Graph.svelte';

	import { runSimulation } from '$lib/montecarlo/runSimulation';

	export let data;
	const { portfolios, returns } = data;

	let portfolio = portfolios[portfolios.length - 2];
	let startingBalance = 1000000;
	let inflation = 3;
	let assetTargets = portfolio.asset_class.map((a) => ({
		name: a.name,
		value: 100 * (a.total / (portfolio.market_value || 0)),
		color: a.color || 'red'
	}));
	let simulationResults: {
		date: Date;
		timestamp: number;
		p5: number;
		p10: number;
		p25: number;
		p50: number;
		p75: number;
		p90: number;
		p95: number;
	}[];

	let events: { event: string; when: number; amount: number }[];

	const onDragHandler = (values: { name: string; value: number; color: string }[]) => {
		assetTargets = values;
	};

	const onEventChangeHandler = (rows: { event: string; when: number; amount: number }[]) => {
		events = rows;
	};

	const simulate = () => {
		simulationResults = runSimulation({ startingBalance, assetTargets, events, returns, inflation });
	};
</script>

<div class="grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-6">
	<div class="order-2 col-span-2 lg:order-1">
		<Container>
			<h3>Modeling</h3>
			{#if simulationResults}
				<Graph {simulationResults} {startingBalance} />
			{/if}
		</Container>
	</div>
	<div class="order-1 col-span-1 lg:order-2">
		<Container>
			<h3 class="mb-4">Modeling Impact</h3>
			<form class="space-y-6">
				<div>
					<label for="startingBalance">Initial Balance</label>
					<input name="startingBalance" type="number" bind:value={startingBalance} />
				</div>
				<div>
					<label for="startingBalance">Inflation</label>
					<input name="startingBalance" type="number" bind:value={inflation} />
				</div>

				<div>
					<Draggable values={assetTargets} {onDragHandler} />
					<div class="mt-2 flex flex-row justify-between space-x-1">
						{#each assetTargets as asset}
							<div class="px-1 py-0.5 text-xs text-white" style={`background-color: ${asset.color};`}>{asset.name}</div>
						{/each}
					</div>
				</div>

				<div>
					<EventSelector {onEventChangeHandler} />
				</div>

				<button class="submit" on:click|preventDefault={simulate}>Run Simulation</button>
			</form>
		</Container>
	</div>
</div>
