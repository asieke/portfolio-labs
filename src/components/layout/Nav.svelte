<script lang="ts">
	import { MenuDesktop, MenuMobile, Links } from '$components/layout';
	import { IconHamburger, IconClose, IconBell } from '$components/svg';
	import { menuMobileShowing } from '$lib/stores/menuMobile';

	console.log('NAV MOBILE MENU', $menuMobileShowing);
</script>

<nav class="bg-gray-800 dark:bg-black-950">
	<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="border-b border-gray-700 dark:border-gray-900">
			<div class="flex h-16 items-center justify-between px-4 sm:px-0">
				<div class="flex items-center">
					<Links />
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
