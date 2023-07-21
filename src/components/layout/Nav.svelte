<script lang="ts">
	import { MenuDesktop, MenuMobile, Links } from '$components/layout';
	import { IconHamburger, IconClose, IconBell } from '$components/svg';
	import { menuMobileShowing } from '$lib/stores/menuMobile';
	import { page } from '$app/stores';
	const { session } = $page.data;

	import { darkMode } from '$lib/stores/darkMode';
	import { Toggle } from '$components/form';
</script>

<nav class="bg-gray-800 dark:bg-dark-950">
	<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="border-b border-gray-700 dark:border-gray-900">
			<div class="flex h-16 items-center justify-between px-4 sm:px-0">
				<div class="flex items-center">
					<Links />
				</div>
				<div>
					<Toggle enabled={$darkMode} onEnable={() => darkMode.set(true)} onDisable={() => darkMode.set(false)} />
				</div>
				<div class="hidden md:block">
					<MenuDesktop />
				</div>
				<div class="-mr-2 flex md:hidden">
					<MenuMobile />
				</div>
			</div>
		</div>
	</div>
</nav>
