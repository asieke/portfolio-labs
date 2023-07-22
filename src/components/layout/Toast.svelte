<script lang="ts">
	import { toasts, removeToast } from '$lib/stores/toasts';
	import { IconWarning, IconError, IconInfo, IconSuccess } from '$components/svg';
</script>

<div class="absolute right-3 top-3 flex w-[200px] flex-col gap-y-4">
	{#each $toasts as { message, id, status, state }}
		<button on:click={() => removeToast(id)}>
			<div class="toast {status} {state}">
				{#if status === 'warning'}
					<IconWarning />
				{:else if status === 'error'}
					<IconError />
				{:else if status === 'info'}
					<IconInfo />
				{:else if status === 'success'}
					<IconSuccess />
				{/if}
				<span class="ml-1 text-left">{message}</span>
			</div>
		</button>
	{/each}
</div>

<style lang="postcss">
	.toast {
		@apply flex w-full flex-row rounded-lg p-4 align-middle text-xs shadow-lg;
	}

	.showing {
		animation: fadeIn 0.5s forwards;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes fadeOut {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	.error {
		@apply bg-red-200 text-red-700;
	}

	.success {
		@apply bg-green-200 text-green-700;
	}

	.warning {
		@apply bg-yellow-200 text-yellow-700;
	}

	.info {
		@apply bg-blue-200 text-blue-700;
	}
</style>
