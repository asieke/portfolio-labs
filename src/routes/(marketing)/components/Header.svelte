<script lang="ts">
	import MenuMobile from './MenuMobile.svelte';
</script>

<header class="absolute inset-x-0 top-0 z-50">
	<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex h-8 w-8">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Your Company</span>
				<img
					class="h-8 w-8"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
					alt=""
				/>
			</a>
		</div>

		<div class="top-links hidden sm:flex sm:gap-x-8 lg:gap-x-12">
			<a href="/about">About</a>
			<a href="/blog">Blog</a>
			<a href="/#features">Features</a>
			<a href="/#pricing">Pricing</a>
			<a href="/faq">FAQ</a>
		</div>
		<div class="top-links hidden sm:flex">
			<a href="/">Log in <span aria-hidden="true">&rarr;</span></a>
		</div>
		<MenuMobile />
	</nav>
</header>

<style>
	.top-links a {
		@apply text-sm font-semibold leading-6 text-gray-900;
	}

	.top-links a:hover {
		@apply opacity-50;
	}
</style>
