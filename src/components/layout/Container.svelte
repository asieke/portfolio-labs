<script lang="ts">
	type Layout = 'left' | 'right' | 'even' | 'full' | 'tight';

	export let layout: Layout = 'full';

	let gridClass = `grid w-full grid-cols-1 gap-4 md:grid-cols-2`;
	if (layout === 'left') gridClass = `grid w-full grid-cols-1 gap-4 md:grid-cols-leftcol`;
	if (layout === 'right') gridClass = `grid w-full grid-cols-1 gap-4 md:grid-cols-rightcol`;
</script>

{#if layout === 'tight'}
	<div class="mx-auto w-fit rounded-xl bg-slate-50 p-8 shadow-lg dark:bg-dark-900">
		<slot />
	</div>
{:else if layout === 'full'}
	<div class="w-full rounded-xl bg-slate-50 p-8 shadow-lg dark:bg-dark-900">
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
