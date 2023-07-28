<script lang="ts">
	import { color, formatCurrency, formatPercent } from '$lib/utils/format';
	import { hexToRGBA } from '$lib/utils/colors';

	export let asset: {
		name: string;
		total: number;
		color: string;
	};
	export let label: string;
	export let bgcolor: string;
	export let total: number;

	let background = 'background-color: ' + (label === 'Total' ? hexToRGBA(bgcolor, 0.3) : hexToRGBA(bgcolor, 0.1));
</script>

<div class="row" style={background}>
	<div class="w-1/12 text-left">
		<div class="h-3 w-3" style="background-color: {asset.color}" />
	</div>
	<div class="w-2/12"><span>{label}</span></div>
	<div class="w-2/12 text-left"><span>{asset.name}</span></div>
	<div class="w-2/12 text-left"><span>{formatCurrency(asset.total, 0)}</span></div>
	<div class="w-2/12 text-left"><span />{formatPercent(asset.total / total, 1)}</div>
	<div class="w-2/12 text-left"><span>asdfasdf</span></div>
	<div class="w-1/12 text-left"><span>asdfasdf</span></div>
</div>

<style lang="postcss">
	.row {
		@apply flex items-center justify-between border-b-[1px] border-b-slate-500 px-2 py-1.5 text-xs;
	}
	.row:last-child {
		@apply border-none;
	}
</style>
