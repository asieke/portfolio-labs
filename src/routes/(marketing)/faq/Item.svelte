<script lang="ts">
	import { slide } from 'svelte/transition';

	export let question = '';
	export let answer = '';

	let expanded = false;
</script>

<div class="pt-6">
	<dt>
		<!-- Expand/collapse question button -->
		<button
			type="button"
			on:click={() => (expanded = !expanded)}
			class="flex w-full items-start justify-between text-left text-gray-900"
			aria-controls="faq-0"
			aria-expanded="false"
		>
			<span class="text-base font-semibold leading-7">{question}</span>
			<span class="ml-6 flex h-7 items-center">
				{#if !expanded}
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
					</svg>
				{:else}
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
					</svg>
				{/if}
			</span>
		</button>
	</dt>
	{#if expanded}
		<dd class="mt-2 pr-12" id="faq-0" transition:slide={{ duration: 200 }}>
			<p class="text-base leading-7 text-gray-600">
				{answer}
			</p>
		</dd>
	{/if}
</div>
