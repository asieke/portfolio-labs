<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import type { Position } from '../types';
	import { PUBLIC_EOD } from '$env/static/public';
	import axios from 'axios';
	import { formatNumber, formatCurrency } from '$lib/shared/formatters';
	import type { Portfolio, EODFundamental } from '../types';

	export let selectedPosition: Position;
	export let exitDetail: () => void;

	let data: EODFundamental | null = null;
	let transactionData: { date: string; action: string; amount: number }[] = [];

	onMount(async () => {
		const { supabase, portfolios } = $page.data;
		const pids = portfolios.map((p: Portfolio) => p.id);
		//get the env variable for the EOD API
		const symbol = selectedPosition.symbol;
		const url = `https://eodhistoricaldata.com/api/fundamentals/${symbol}?api_token=${PUBLIC_EOD}`;
		console.log(url);
		const { data: eod_data } = await axios.get(url);

		const { data: txnData, error: txnError } = await supabase
			.from('transactions')
			.select('date, action, amount')
			.eq('symbol', selectedPosition.symbol)
			.in('portfolio_id', pids)
			.order('date', { ascending: true });

		transactionData = txnData;

		data = eod_data;

		console.log(Object.keys(data.General));
	});
</script>

<div class="max-w-6xl mx-auto">
	<div class="grid grid-cols-1 lg:grid-cols-rightcol">
		<div class="main mb-4 lg:mb-0 lg:mr-4 ">
			<div class="flex mb-4">
				<button on:click={exitDetail}>All Portfolios</button>
				<span class="mx-3">/</span>
				<button on:click={exitDetail}>My Portfolio</button>
				<span class="mx-3">/</span>
				<button class="text-primary-500">{selectedPosition.symbol}</button>
			</div>
			<div class="align-middle">
				<h3 class="border-b-[1px] border-slate-200 font-semibold text-xl pb-2">
					General Security Information
				</h3>
			</div>

			{#if data}
				{#each Object.keys(data.General) as key}
					<div class="row">
						<div class="w-1/3 text-slate-500 text-left">{key}</div>
						<div class="w-2/3 text-slate-800 text-left">
							{data.General[key]}
						</div>
					</div>
				{/each}
			{/if}
		</div>
		<div class="main">
			<h3 class="text-primary-600 font-bold">My Position</h3>
			<h3 class="border-b-[1px] border-slate-200 font-semibold text-lg pb-3">
				{selectedPosition.name}
			</h3>
			<div class="row">
				<div class="w-1/2 text-slate-500 text-left">Total Quantity</div>
				<div class="w-1/2 text-slate-800 text-right">{formatNumber(selectedPosition.quantity)}</div>
			</div>
			<div class="row">
				<div class="w-1/2 text-slate-500 text-left">Total Market Value</div>
				<div class="w-1/2 text-slate-800 text-right">
					{formatCurrency(selectedPosition.market_value)}
				</div>
			</div>
			<div class="row">
				<div class="w-1/2 text-slate-500 text-left">Total Cost Basis</div>
				<div class="w-1/2 text-slate-800 text-right">
					{formatCurrency(selectedPosition.cost_basis)}
				</div>
			</div>
			<div class="row">
				<div class="w-1/2 text-slate-500 text-left">Current Price</div>
				<div class="w-1/2 text-slate-800 text-right">{formatCurrency(selectedPosition.price)}</div>
			</div>

			<h3 class="text-primary-600 font-bold mt-6">My Transactions</h3>
			<h3 class="border-b-[1px] border-slate-200 font-semibold text-lg pb-3">My Transactions</h3>
			{#each transactionData as txn}
				<div class="row">
					<div class="w-1/3 text-left text-slate-500">{txn.date}</div>
					<div class="w-1/3 text-center text-slate-500">{txn.action}</div>
					<div class="w-1/3 text-right">{formatCurrency(txn.amount)}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	button {
		@apply font-medium;
	}
	button:hover {
		@apply underline;
	}
	.main {
		@apply rounded-lg p-6 lg:px-10 lg:py-8 bg-slate-50;
	}

	.row {
		@apply flex flex-row border-b-[1px] border-slate-200 py-2 text-sm;
	}
</style>
