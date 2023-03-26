<script lang="ts">
	import { CheckMark } from '$svg';
</script>

<div class="bg-white py-24 sm:py-32" id="pricing">
	<div class="mx-auto max-w-7xl px-6 md:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h2>Pricing</h2>
			<h1>Pricing plans for portfolio visualization</h1>
		</div>
		<h3>
			Get insights into historical performance tracking, direct indexing, tax loss harvesting, asset
			allocation and more with Portfolio Labs.
		</h3>
		<div
			class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 md:mx-0 md:max-w-none md:grid-cols-3"
		>
			<div
				class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 md:mt-8 md:rounded-r-none"
			>
				<div>
					<div class="flex items-center justify-between gap-x-4">
						<h3 id="tier-freelancer" class="text-lg font-semibold leading-8 text-gray-900">
							Silver
						</h3>
					</div>
					<p class="label">See how your investments are performing with basic insights.</p>
					<p class="price">
						<span class="price">$99</span>
						<span class="term">/month</span>
					</p>
					<ul>
						<li>
							<CheckMark />
							Historical performance tracking
						</li>

						<li>
							<CheckMark />
							Portfolio optimization
						</li>

						<li>
							<CheckMark />
							Direct indexing
						</li>

						<li>
							<CheckMark />
							Basic tax loss harvesting
						</li>
					</ul>
				</div>
				<button class="text-primary-600">Buy Plan</button>
			</div>

			<div
				class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 md:z-10 md:rounded-b-none"
			>
				<div>
					<div class="flex items-center justify-between gap-x-4">
						<h3 id="tier-startup" class="text-lg font-semibold leading-8 text-indigo-600">Gold</h3>

						<p class="most-popular">Most popular</p>
					</div>
					<p class="label">Get advanced insights and dedicated support with Portfolio Labs.</p>
					<p class="price">
						<span class="price">$250</span>
						<span class="term">/month</span>
					</p>
					<ul>
						<li><CheckMark />Historical performance tracking</li>

						<li>
							<CheckMark />
							Portfolio optimization
						</li>

						<li>
							<CheckMark />
							Direct indexing
						</li>

						<li>
							<CheckMark />
							Tax loss harvesting
						</li>

						<li>
							<CheckMark />
							Asset allocation
						</li>

						<li>
							<CheckMark />
							Advanced risk management
						</li>

						<li>
							<CheckMark />
							24-hour support
						</li>
					</ul>
				</div>
				<button class="bg-primary-500 text-white">Buy Plan</button>
			</div>

			<div
				class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 md:mt-8 md:rounded-l-none"
			>
				<div>
					<div class="flex items-center justify-between gap-x-4">
						<h3 id="tier-enterprise" class="text-lg font-semibold leading-8 text-gray-900">
							Platinum
						</h3>
					</div>
					<p class="label">
						The ultimate portfolio visualization experience for high net worth individuals and
						institutions.
					</p>
					<p class="price">
						<span class="price">$500</span>
						<span class="term">/month</span>
					</p>
					<ul>
						<li>
							<CheckMark />
							All Gold features, plus:
						</li>

						<li>
							<CheckMark />
							Dedicated account manager
						</li>

						<li>
							<CheckMark />
							Customizable dashboard
						</li>

						<li>
							<CheckMark />
							Advanced tax optimization
						</li>

						<li>
							<CheckMark />
							White-glove support
						</li>
					</ul>
				</div>
				<button class="text-primary-600">Buy Plan</button>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	h2 {
		@apply text-base font-semibold leading-7 text-indigo-600;
	}
	h1 {
		@apply mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl;
	}

	span.price {
		@apply font-bold tracking-tight text-gray-900 text-4xl;
	}
	span.term {
		@apply text-sm font-semibold leading-6 text-gray-600;
	}

	h3 {
		@apply mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600;
	}

	.label {
		@apply mt-4 text-sm leading-6 text-gray-600;
	}

	p.price {
		@apply mt-6 flex items-baseline gap-x-1;
	}

	p.most-popular {
		@apply rounded-full bg-indigo-600/10 py-1 px-2.5 text-xs font-semibold leading-5 text-indigo-600;
	}

	ul {
		@apply mt-8 space-y-3 text-sm leading-6 text-gray-600;
	}
	li {
		@apply flex gap-x-3;
	}

	button {
		@apply mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300;
	}
</style>
