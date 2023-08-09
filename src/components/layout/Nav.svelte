<script lang="ts">
	import { MenuDesktop, MenuMobile, Links, Toast } from '$components/layout';
</script>

<nav class="h-full bg-slate-100 dark:bg-dark-950">
	<div class="mx-auto max-w-6xl sm:px-6 lg:px-8">
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
	<Toast />
</nav>
