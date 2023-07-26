<script lang="ts">
	import { color, formatCurrency, formatNumber, formatPercent } from '$lib/utils/format';

	export let data: {
		name: string | undefined;
		value: number | string | undefined;
		format: string;
		colorText: boolean;
	}[] = [];

	export let style = ['w-1/2 text-left', 'w-1/2 text-right'];
</script>

<div>
	{#each data as { name, value, format, colorText }}
		{#if name && value}
			<div class="row">
				<div class="{style[0]} left">{name}</div>
				{#if colorText}
					<div class="{style[1]} right {color(value)}">
						{format === 'string' ? value : format === 'number' ? formatNumber(value) : format === 'currency' ? formatCurrency(value) : formatPercent(value)}
					</div>
				{:else}
					<div class="{style[1]} right text-slate-800 dark:text-slate-200">
						{format === 'string' ? value : format === 'number' ? formatNumber(value) : format === 'currency' ? formatCurrency(value) : formatPercent(value)}
					</div>
				{/if}
			</div>
		{/if}
	{/each}
</div>

<style lang="postcss">
	.row {
		@apply flex flex-row border-b-[1px] border-slate-200 py-2 text-sm;
	}

	.left {
		@apply text-slate-500 dark:text-slate-400;
	}
</style>
