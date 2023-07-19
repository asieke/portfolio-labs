<script lang="ts">
	import { IconHamburger, IconClose } from '$components/svg';
	import { navLinks, profileLinks } from '$lib/layoutData';
	import { page } from '$app/stores';
	import { menuMobileShowing } from '$lib/stores/menuMobile';

	$: pathname = $page.url.pathname;
</script>

{#if !$menuMobileShowing}
	<div id="menuMobile">
		<button
			on:click={() => menuMobileShowing.set(true)}
			type="button"
			class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
		>
			<span class="sr-only">Open main menu</span>
			<IconHamburger />
		</button>
	</div>
{:else}
	<div id="menuMobile">
		<button
			on:click={() => menuMobileShowing.set(false)}
			type="button"
			class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
		>
			<span class="sr-only">Open main menu</span>
			<IconClose />
		</button>
	</div>
	<div class="absolute left-0 top-16 w-full border-b border-t border-gray-700 bg-gray-800">
		<div class="space-y-1 px-2 py-3 sm:px-3">
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
			{#each navLinks as { label, href }, i}
				<a
					{href}
					class={pathname === href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
					aria-current="page">{label}</a
				>
			{/each}
		</div>
		<div class="border-t border-gray-700 pb-3 pt-4">
			<div class="flex items-center px-5">
				<div class="flex-shrink-0">
					<img
						class="h-10 w-10 rounded-full"
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
				</div>
				<div class="ml-3">
					<div class="text-base font-medium leading-none text-white">Tom Cook</div>
					<div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
				</div>
				<button
					type="button"
					class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
				>
					<span class="sr-only">View notifications</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
						/>
					</svg>
				</button>
			</div>
			<div class="mt-3 space-y-1 px-2">
				{#each profileLinks as { label, href }, i}
					<a
						{href}
						class={pathname === href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
						aria-current="page">{label}</a
					>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	a {
		@apply block rounded-md px-3 py-2 text-base font-medium;
	}
</style>
