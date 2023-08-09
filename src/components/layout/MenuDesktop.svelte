<script lang="ts">
	import { profileLinks } from '$lib/data/layoutData';
	import { menuDesktopShowing } from '$lib/stores/menuDesktop';
	import { page } from '$app/stores';
	import { Notifications } from '$components/layout';

	$: pathname = $page.url.pathname;
	const { profile } = $page.data;
</script>

<div class="ml-4 flex items-center md:ml-6">
	<Notifications />
	<div class="relative ml-3">
		<div id="menuDesktop">
			<button
				on:click={() => menuDesktopShowing.set(!$menuDesktopShowing)}
				type="button"
				class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm hover:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-primary-500"
				aria-expanded="false"
				aria-haspopup="true"
			>
				<span class="sr-only">Open user menu</span>
				<img class="h-8 w-8 rounded-full" src="/images/headshot.png" alt="" />
			</button>
		</div>
		{#if $menuDesktopShowing}
			<div
				class="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white py-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-dark-950 dark:ring-gray-700"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="user-menu-button"
				tabindex="-1"
			>
				<div class="border-b-[1px] border-slate-300 px-4 pb-2 text-sm text-slate-400 dark:border-slate-600 dark:text-slate-500">{profile.email}</div>
				{#each profileLinks as { label, href }, i}
					<a
						{href}
						class={pathname === href ? 'bg-gray-200 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-900'}
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
		@apply block px-4 py-2 text-sm text-gray-700 dark:text-gray-300;
	}
</style>
