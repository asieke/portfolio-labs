<script lang="ts">
	type Layout = 'left' | 'right' | 'even' | 'full' | 'tight';

	let tempClass = '';
	export { tempClass as class };
	export let layout: Layout = 'full';

	let gridClass = `${tempClass} grid w-full grid-cols-1 gap-4 md:grid-cols-2`;
	if (layout === 'left') gridClass = `${tempClass} grid w-full grid-cols-1 gap-4 md:grid-cols-leftcol`;
	if (layout === 'right') gridClass = `${tempClass} grid w-full grid-cols-1 gap-4 md:grid-cols-rightcol`;
</script>

{#if layout === 'tight'}
	<div class="{tempClass} mx-auto w-fit rounded-xl bg-slate-50 p-8 shadow-lg dark:bg-dark-900">
		<slot />
	</div>
{:else if layout === 'full'}
	<div class="{tempClass} w-full rounded-xl bg-slate-50 p-8 shadow-lg dark:bg-dark-900">
		<slot />
	</div>
{:else}
	<div class={gridClass}>
		<div class="rounded-xl bg-slate-50 p-8 shadow-lg dark:bg-dark-900">
			<slot name="left" />
		</div>
		<div class="rounded-xl bg-slate-50 p-8 shadow-lg dark:bg-dark-900">
			<slot name="right" />
		</div>
	</div>
{/if}
