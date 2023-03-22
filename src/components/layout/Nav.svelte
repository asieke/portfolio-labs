<script lang="ts">
	import { LinksMain, MobileMenu, ProfileDropdown } from '$components/layout';
	import { Bell, Gear } from '$svg';

	const toggleDarkMode = () => {
		document.documentElement.classList.toggle('dark');
		localStorage.setItem(
			'color-theme',
			document.documentElement.classList.contains('dark') ? 'dark' : 'light'
		);
	};

	let menuShowing = false;
</script>

<header class="header">
	<div class="mx-auto max-w-3xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="relative flex flex-wrap items-center justify-between pt-4">
			<!-- Logo -->
			<div class="w-8">
				<a href="/">
					<span class="sr-only">Portfolio Labs</span>
					<img class="h-8 w-8" src="/logo.png" alt="" />
				</a>
			</div>

			<!-- Main Links-->
			<div class="hidden md:block">
				<nav class="flex space-x-4">
					<LinksMain view="desktop" />
				</nav>
			</div>

			<!-- Right Links -->
			<div class="hidden md:flex">
				<button
					type="button"
					class="flex-shrink-0 rounded-full p-1 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none"
				>
					<span class="sr-only">View notifications</span>
					<Bell />
				</button>
				<button
					type="button"
					on:click={toggleDarkMode}
					class="ml-2 flex-shrink-0 rounded-full p-1 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none"
				>
					<span class="sr-only">View notifications</span>
					<Gear />
				</button>

				<!-- Profile dropdown -->
				<ProfileDropdown />
			</div>
			<div class="flex md:hidden">
				<MobileMenu />
			</div>

			<!-- Menu button -->
		</div>
	</div>
</header>
