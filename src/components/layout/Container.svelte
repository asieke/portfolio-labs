<script lang="ts">
	export let layout: 'left' | 'right' | 'even' | 'full' = 'full';

	let gridClass = `grid w-full grid-cols-1 gap-4 md:grid-cols-2`;
	if (layout === 'left') gridClass = `grid w-full grid-cols-1 gap-4 md:grid-cols-leftcol`;
	if (layout === 'right') gridClass = `grid w-full grid-cols-1 gap-4 md:grid-cols-rightcol`;
</script>

{#if layout === 'full'}
	<div class="w-full rounded-xl bg-slate-100 p-8 shadow-lg dark:bg-black-900">
		<slot />
	</div>
{:else}
	<div class={gridClass}>
		<div class="rounded-xl bg-slate-100 p-8 shadow-lg dark:bg-black-900">
			<slot name="left" />
		</div>
		<div class="rounded-xl bg-slate-100 p-8 shadow-lg dark:bg-black-900">
			<slot name="right" />
		</div>
	</div>
{/if}
