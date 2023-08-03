<script lang="ts">
	import { formatPercent } from '$lib/utils/format';
	import { Logo } from '$components/brand';
	import type { Profile } from '$types/profiles';
	import { IconSpinner } from '$components/svg';
	import { TextToggle } from '$components/form';
	import type { StripeProduct } from '$types/stripe';

	export let profile: Profile;
	export let products: StripeProduct[];
	export let prev = () => {};
	export let next = async () => {};

	const options = products.map((p) => p.name);
	const maxPrice = Math.max(...(products.map((p) => p.yearly_price) as number[]));

	let selectedProduct = products[0];

	const handleChange = (i: number) => {
		selectedProduct = products[i];
	};
</script>

<div class="flex w-full flex-col justify-center gap-y-4">
	<h3 class="mx-auto">Try Portfolio Labs for 14 days</h3>
	<TextToggle {options} onChange={handleChange} />
</div>

<div class="mt-6 flex flex-col gap-y-4 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
	<div class="flex w-full justify-between">
		<div>
			<div class="text-base font-semibold">Amount Due Today</div>
			<div class="text-sm">You will not be billed</div>
		</div>
		<div class="text-base">$0.00</div>
	</div>
	<div class="flex w-full justify-between">
		<div>
			<div class="text-base font-semibold">Amount Due After August 8</div>
			<div class="text-sm">You will not be billed</div>
		</div>
		<div>
			<div class="text-base">${(selectedProduct.unit_amount || 0) / 100} / {selectedProduct.interval}</div>
			<div class="text-sm text-green-700">{selectedProduct.yearly_price !== maxPrice ? 'save ' + formatPercent(1 - selectedProduct.yearly_price / maxPrice) : ''}</div>
		</div>
	</div>
	<button class="submit mt-4">Continue</button>
</div>
<p class="p-2 text-sm text-slate-400 dark:text-slate-500">
	You are opting for a subscription plan, which includes a 14-day free trial. The plan can either be yearly at $200 or monthly at $20. Following the end of the free trial, your credit card will be
	automatically billed based on the subscription plan you chose. You have the right to cancel your subscription at any time. In case of cancellation, you'll retain access to the services until the end
	of your current billing period. By finalizing this subscription, you agree to these terms.
</p>
