<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import type { SlideParams } from 'svelte/types/runtime/transition';

	import { Hamburger, Xmark } from '$svg';
	const openSidebar = () => {
		sidebarShowing = true;
	};

	let sidebarShowing = false;
</script>

<div class="flex sm:hidden">
	<button
		type="button"
		on:click={() => (sidebarShowing = !sidebarShowing)}
		class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 z-50"
	>
		{#if !sidebarShowing}
			<Hamburger class="w-6 h-6" />
		{:else}
			<Xmark class="w-6 h-6" />
		{/if}
	</button>
</div>

<!-- transition:fly={{ x: '100vw', duration: 300 }} -->

{#if sidebarShowing}
	<div class="fixed sm:hidden">
		<button
			class="fixed w-full h-full bg-black bg-opacity-50 z-20 top-0 right-0 cursor-default"
			on:click={() => (sidebarShowing = false)}
			in:fade
		/>
		<div
			class="fixed w-[80%] bg-white z-30 top-16 shadow-xl right-[10%] rounded-lg"
			in:fly={{ y: '-10%', duration: 300 }}
		>
			<nav class="py-4 px-6" aria-label="Sidebar">
				<!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
				<a on:click|stopPropagation={() => (sidebarShowing = false)} href="/about">About</a>
				<a on:click|stopPropagation={() => (sidebarShowing = false)} href="/blog">Blog</a>
				<a on:click|stopPropagation={() => (sidebarShowing = false)} href="/#features">Features</a>
				<a on:click|stopPropagation={() => (sidebarShowing = false)} href="/#pricing">Pricing</a>
				<a on:click|stopPropagation={() => (sidebarShowing = false)} href="/faq">FAQ</a>
			</nav>
			<div class="bg-gray-200 w-full flex justify-center p-4 rounded-b-lg">
				<button class="btn-primary w-full">Log In</button>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	a {
		@apply text-gray-600 flex items-center rounded-md px-3 py-2 text-base font-medium mt-2;
	}
	a:hover {
		@apply bg-gray-50 text-gray-900;
	}
</style>
