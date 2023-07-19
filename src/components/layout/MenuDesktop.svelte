<script lang="ts">
	import { profileLinks } from '$lib/layoutData';
	import { IconBell } from '$components/svg';
	import { menuDesktopShowing } from '$lib/stores/menuDesktop';
	import { page } from '$app/stores';

	$: pathname = $page.url.pathname;
</script>

<div class="ml-4 flex items-center md:ml-6">
	<button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white">
		<span class="sr-only">View notifications</span>
		<IconBell />
	</button>
	<div class="relative ml-3">
		<div id="menuDesktop">
			<button
				on:click={() => menuDesktopShowing.set(!$menuDesktopShowing)}
				type="button"
				class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm hover:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-gray-800"
				aria-expanded="false"
				aria-haspopup="true"
			>
				<span class="sr-only">Open user menu</span>
				<img
					class="h-8 w-8 rounded-full"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
			</button>
		</div>
		{#if $menuDesktopShowing}
			<div
				class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="user-menu-button"
				tabindex="-1"
			>
				{#each profileLinks as { label, href }, i}
					<a
						{href}
						class={pathname === href ? 'bg-gray-200' : 'hover:bg-gray-100'}
						on:click|stopPropagation={() => menuDesktopShowing.set(false)}
						role="menuitem"
						tabindex="-1"
						id="user-menu-item-0">{label}</a
					>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	a {
		@apply block px-4 py-2 text-sm text-gray-700;
	}
</style>
