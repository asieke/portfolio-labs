<script lang="ts">
	import { Logo } from '$components/brand';
	import { page } from '$app/stores';
	const { session } = $page.data;

	console.log('Loading - [Marketing] / Header');
	console.log('Really dialing it up now!');
	console.log('WOW there are 3 now!');
</script>

<nav class="flex h-24 items-center justify-between px-4 md:px-12" aria-label="Global">
	<div class="">
		<a href="/" class="">
			<span class="sr-only">Portfolio Labs</span>
			<Logo />
		</a>
	</div>
	<div class="flex flex-row space-x-4 md:space-x-8">
		<a href="/">About</a>
		<a href="/blog">Blog</a>
		<a href="/">Company</a>
	</div>
	<div class="">
		{#if session}
			<a href="/dashboard" class="">Dashboard →</a>
		{:else}
			<a href="/signin" class="">Log In →</a>
		{/if}
	</div>
</nav>

<div class="py-12 md:py-24">
	<div class="mx-auto max-w-7xl px-6 md:px-24">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Portfolio Labs</h1>

			<h1 class="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">All of your accounts: <span class="italic text-primary-600 dark:text-primary-300">actually</span> aggregated</h1>
			<p>
				Portfolio Labs connects your investment accounts and provides you with insights on your historical performance tracking, direct indexing, tax loss harvesting, and asset allocation. Make
				smarter investments and optimize your portfolio with Portfolio Labs.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<button
					class="w-[200px] rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Get started</button
				>
			</div>
		</div>
		<div class="mt-16 flow-root sm:mt-24">
			<div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
				<img src="/images/screenshot.png" alt="App screenshot" width="2432" height="1442" class="rounded-md shadow-2xl ring-1 ring-gray-900/10" />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	p {
		@apply mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300;
	}

	a {
		@apply block font-semibold text-black hover:text-primary-500 dark:text-white;
	}
</style>
