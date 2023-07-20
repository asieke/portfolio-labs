<script lang="ts">
	import { navLinks } from '$lib/layoutData';
	import { page } from '$app/stores';
	import { Logo } from '$components/brand';

	$: pathname = $page.url.pathname;
</script>

<div class="flex-shrink-0">
	<a href="/"><Logo /></a>
</div>
<div class="hidden md:block">
	<div class="ml-10 flex items-baseline space-x-4">
		<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
		{#each navLinks as { label, href }, i}
			<a
				{href}
				class={pathname === href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
				aria-current="page">{label}</a
			>
		{/each}
	</div>
</div>

<style lang="postcss">
	a {
		@apply rounded-md  px-3 py-2 text-sm font-medium;
	}
</style>
