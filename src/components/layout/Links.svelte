<script lang="ts">
	import { navLinks } from '$lib/layoutData';
	import { page } from '$app/stores';

	$: pathname = $page.url.pathname;
</script>

<div class="flex-shrink-0">
	<a href="/">
		<img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
	</a>
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
