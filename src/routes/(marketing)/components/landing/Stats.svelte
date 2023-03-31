<script lang="ts">
	import Gradient from './Gradient.svelte';
</script>

<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
	<div class="relative mx-auto max-w-7xl px-6 lg:px-8">
		<Gradient />
		<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
			<h2 class="text-base font-semibold leading-8 text-indigo-400">Our track record</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
				Trusted by high net worth individuals&nbsp;and institutions&nbsp;worldwide
			</p>
			<p class="mt-6 text-lg leading-8 text-gray-300">
				Portfolio Labs provides portfolio visualization for high net worth individuals and
				institutions. Our product connects a users accounts then provides insights into better
				historical performance tracking, direct indexing, tax loss harvesting, and asset allocation.
			</p>
		</div>
		<dl
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4"
		>
			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm leading-6">Clients who trust Portfolio Labs</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">100+</dd>
			</div>

			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm leading-6">Fees</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">Customized</dd>
			</div>

			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm leading-6">Uptime guarantee</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">99.8%</dd>
			</div>

			<div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
				<dt class="text-sm leading-6">Value of assets tracked</dt>
				<dd class="order-first text-3xl font-semibold tracking-tight">$1B+</dd>
			</div>
		</dl>
	</div>
</div>
