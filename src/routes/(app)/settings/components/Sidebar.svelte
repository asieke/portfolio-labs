<script lang="ts">
	import { page } from '$app/stores';
	import { settingsLinks } from '$lib/data/layoutData';
	$: pathname = $page.url.pathname;
</script>

<nav class="flex flex-1 flex-col">
	<ul role="list" class="flex flex-1 flex-col gap-y-2">
		{#each settingsLinks as { href, label, icon }, i}
			<li>
				<!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
				<a {href} class={href === pathname ? 'bg-gray-200 text-indigo-600 dark:bg-gray-700 dark:text-indigo-200' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-200'}>
					<svelte:component
						this={icon}
						class="h-6 w-6 shrink-0  {href === pathname ? 'text-indigo-600 dark:text-indigo-200' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-200'}"
					/>
					{label}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	ul {
		@apply list-none;
	}

	a {
		@apply flex gap-x-2 rounded-md p-2 text-sm font-semibold leading-6 hover:bg-gray-200 dark:hover:bg-gray-700;
	}
</style>
