<script lang="ts">
	import { add_transform } from 'svelte/internal';
	interface step {
		name: string;
		description: string;
		status: string;
	}
	export let steps: step[];
	export let currentStep: number;
	export let update: (step: number) => void;
</script>

<nav aria-label="Progress">
	<ol class="overflow-hidden">
		{#each steps as step, index}
			<li class="relative pb-10">
				{#if index !== steps.length - 1}
					<div
						class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 {step.status === 'complete'
							? 'bg-indigo-600'
							: 'bg-gray-300'}"
						aria-hidden="true"
					/>
				{/if}

				<div
					on:click={() => update(index)}
					on:keydown={() => update(index)}
					role="button"
					class="group relative flex items-start {index === 0 ? 'aria-current="step"' : ''}"
				>
					<span class="flex h-9 items-center">
						<span
							class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full {step.status ===
							'complete'
								? 'bg-indigo-600 group-hover:bg-indigo-800'
								: 'bg-white'} {step.status !== 'complete'
								? 'border-2 border-' + (step.status === 'current' ? 'indigo-600' : 'gray-300')
								: ''}"
						>
							{#if step.status === 'complete'}
								<svg
									class="h-5 w-5 text-white"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clip-rule="evenodd"
									/>
								</svg>
							{:else}
								<span
									class="h-2.5 w-2.5 rounded-full {step.status === 'current'
										? 'bg-indigo-600 group-hover:bg-indigo-800 '
										: 'bg-transparent group-hover:bg-gray-300'}"
								/>
							{/if}
						</span>
					</span>
					<span class="ml-4 flex min-w-0 flex-col">
						<span
							class="text-sm font-medium {index === currentStep
								? 'text-indigo-600'
								: 'text-gray-500'}">{step.name}</span
						>
						<span class="text-sm text-gray-500">{step.description}</span>
					</span>
				</div>
			</li>
		{/each}
	</ol>
</nav>
