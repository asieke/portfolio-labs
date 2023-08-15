<script lang="ts">
	import { fade } from 'svelte/transition';
	import { dialog } from '$lib/stores/dialog';

	const clickHandler = (onClick: () => void) => {
		onClick();
		dialog.set(null);
	};
</script>

{#if $dialog}
	<div class="absolute bottom-0 left-0 right-0 top-0 z-40 flex items-center justify-center" transition:fade={{ duration: 200 }}>
		<div class="absolute left-[50%] top-[15%] -ml-[150px] w-[300px] rounded-lg bg-white p-4 shadow-2xl">
			<h3>{$dialog.title}</h3>
			<p>{$dialog.message}</p>
			<div class="mt-3 flex w-full flex-row justify-end gap-x-1">
				{#each $dialog.buttons as button}
					<button on:click={() => clickHandler(button.onClick)} class={button.color}>{button.text}</button>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	button {
		@apply rounded-md px-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:opacity-90;
	}
</style>
