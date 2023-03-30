<script lang="ts">
	import { ProgressArrow } from '$svg';

	export let step = 1;
	export let complete: boolean[];
</script>

<div
	class="h-10 grid grid-cols-3 rounded-xl items-center text-sm border-gray-300 border-collapse border-[1px] p-0 m-0"
>
	<div class="flex flex-row justify-between items-center">
		<div class="flex flex-row items-center">
			<span class="ml-2 border-2 rounded-full w-4 h-4">
				{#if complete[0]}<div class="font-bold -mt-2.5 text-lg">✓</div>{/if}
			</span>
			<button class="ml-2 text-primary-500" on:click={() => (step = 1)}>Profile</button>
		</div>
		<ProgressArrow class="h-[39px] text-gray-300" />
	</div>
	<div class="flex flex-row justify-between items-center ">
		<div class="flex flex-row items-center">
			<span class="ml-2 border-2 rounded-full w-4 h-4">
				{#if complete[1]}<div class="font-bold -mt-2.5 text-lg">✓</div>{/if}
			</span>
			<button class="ml-2 text-primary-500" on:click={() => (step = 2)}>Plan</button>
		</div>
		<ProgressArrow class="h-[39px] text-gray-300" />
	</div>
	<div class="">
		<div class="flex flex-row items-center">
			<span class="ml-2 border-2 rounded-full w-4 h-4">
				{#if complete[2]}<div class="font-bold -mt-2.5 text-lg">✓</div>{/if}
			</span>
			<button class="ml-2 text-primary-500" on:click={() => (step = 3)}>Payment</button>
		</div>
	</div>
</div>
