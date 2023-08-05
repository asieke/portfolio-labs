<script lang="ts">
	import { IconCircleCheck } from '$components/svg';
	let current = 1;
	let steps = ['My Account', 'Financial Plan', 'My Subscription', 'Payment'];
</script>

<div class="mb-4 flex flex-row items-center gap-x-2 text-sm text-slate-500">
	{#each steps as step, i}
		{#if i === current}
			<div class=" text-slate-500">
				<div class=" h-[8px] w-[8px] rounded-full bg-primary-300" />
			</div>
		{:else if i < current}
			<div class=" text-slate-500">
				<div class=" h-[8px] w-[8px] rounded-full bg-primary-600" />
			</div>
		{:else if i > current}
			<div class=" text-slate-500">
				<div class=" h-[8px] w-[8px] rounded-full bg-slate-300" />
			</div>
		{/if}
	{/each}
</div>
