<!--
 @component Stepper
 A stepper component that displays {steps} dots to indicate completion
 @param {number} steps - The number of steps in the stepper.
 @param {number} current - The current step in the stepper.
-->

<script lang="ts">
	export let steps = 4;
	export let current = 0;

	const bgs = Array(steps).fill('');
	bgs.forEach((_, i) => {
		if (i > current) bgs[i] = 'bg-slate-300';
		if (i < current) bgs[i] = 'bg-primary-300';
		if (i === current) bgs[i] = 'bg-primary-600';
	});
</script>

<div class="mb-4 flex flex-row items-center gap-x-2 text-sm text-slate-500">
	{#each bgs as bg}
		<div class=" text-slate-500">
			<div class=" h-[8px] w-[8px] rounded-full {bg}" />
		</div>
	{/each}
</div>
