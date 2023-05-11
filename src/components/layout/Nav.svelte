<script lang="ts">
	import { page } from '$app/stores';
	import {
		LinksMain,
		MenuMobile,
		MenuDarkMode,
		MenuNotifications,
		MenuProfile
	} from '$components/layout';
</script>

<header class="header">
	<div class="mx-auto max-w-3xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="relative flex flex-wrap items-center justify-between pt-4">
			<!-- Logo -->
			<div class="w-8">
				<a href="/">
					<img class="h-8 w-8" src="/logo.png" alt="" />
				</a>
			</div>

			<!-- Main Links-->
			<div class="hidden md:flex space-x-4">
				<LinksMain view="desktop" />
			</div>

			<!-- Right Links -->
			<div class="hidden md:flex">
				<MenuNotifications />
				<MenuDarkMode />
				<MenuProfile />
			</div>
			<div class="flex md:hidden">
				<MenuMobile />
			</div>

			<!-- Menu button -->
		</div>
	</div>
</header>
