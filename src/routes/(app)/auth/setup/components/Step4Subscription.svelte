<script lang="ts">
	import axios from 'axios';
	import { PUBLIC_STRIPE_KEY, PUBLIC_APP_URL } from '$env/static/public';
	import { TextToggle } from '$components/form';
	import { onMount } from 'svelte';
	import { IconArrowLeft } from '$components/svg';

	import { page } from '$app/stores';
	import { loadStripe } from '@stripe/stripe-js';
	import { formatPercent } from '$lib/utils/format';
	import { createOrGetCustomer, getProducts } from '$models/stripe';

	import type { Stripe as StripeJS, StripeElementsOptionsMode, StripeError } from '@stripe/stripe-js';
	import type { Stripe } from 'stripe';
	import type { StripeProduct } from '$types/stripe';

	const { supabase, profile } = $page.data;

	let stripe: StripeJS | null;
	let customer: Stripe.Customer | null;
	let products: StripeProduct[] | null;
	let selectedProduct: StripeProduct | null;
	let toggleOptions: string[] = [];
	let maxPrice = 0;

	onMount(async () => {
		console.log('...mounting');
		customer = await createOrGetCustomer(supabase, profile);
		products = await getProducts();
		selectedProduct = products[0];
		toggleOptions = products.map((p) => p.interval);

		console.log(toggleOptions);

		if (!selectedProduct) return;

		maxPrice = Math.max(...(products.map((p) => p.yearly_price) as number[]));

		console.log(customer);

		stripe = await loadStripe(PUBLIC_STRIPE_KEY);
		const options = {
			mode: 'subscription',
			amount: 0,
			currency: 'usd',
			// Fully customizable with appearance API.
			appearance: {
				/*...*/
			}
		} as StripeElementsOptionsMode;

		if (!stripe || !customer || !products) return;

		// Set up Stripe.js and Elements to use in checkout form
		const elements = stripe.elements(options);

		// Create and mount the Payment Element
		const paymentElement = elements.create('payment');
		paymentElement?.mount('#payment-element');

		const form = document.getElementById('payment-form') as HTMLFormElement;
		const submitBtn = document.getElementById('submit') as HTMLButtonElement;

		const handleError = (error: StripeError) => {
			const messageContainer = document.querySelector('#error-message');
			if (messageContainer) {
				messageContainer.textContent = error.message || '';
			}
			if (submitBtn) submitBtn.disabled = false;
		};

		form?.addEventListener('submit', async (event) => {
			if (!stripe) return;
			// We don't want to let default form submission happen here,
			// which would refresh the page.
			event.preventDefault();

			// Prevent multiple form submissions
			if (submitBtn?.disabled) {
				return;
			}

			// Disable form submission while loading
			submitBtn.disabled = true;
			submitBtn.style.backgroundColor = '#ffcc33';

			// Trigger form validation and wallet collection

			const { error: submitError } = await elements.submit();
			if (submitError) {
				handleError(submitError);
				return;
			}

			// Create the subscription
			const res = await axios.post('/api/stripe/create-subscription', {
				customerId: customer?.id,
				priceId: selectedProduct?.price_id,
				trial_period_days: 14
			});

			const { type, clientSecret } = res.data;

			const confirmIntent = type === 'setup' ? stripe.confirmSetup : stripe.confirmPayment;

			// Confirm the Intent using the details collected by the Payment Element
			const { error } = await confirmIntent({
				elements,
				clientSecret,
				confirmParams: {
					return_url: PUBLIC_APP_URL + '/auth/complete'
				}
			});

			if (error) {
				// This point is only reached if there's an immediate error when confirming the Intent.
				// Show the error to your customer (for example, "payment details incomplete").
				handleError(error);
			} else {
				// Your customer is redirected to your `return_url`. For some payment
				// methods like iDEAL, your customer is redirected to an intermediate
				// site first to authorize the payment, then redirected to the `return_url`.
			}
		});

		console.log('...done mounting');
	});

	export let prev = () => {};
	// export let next = async () => {};

	const handleChange = (i: number) => {
		if (!products) return;
		selectedProduct = products[i];
	};
</script>

<div class="relative">
	<button on:click={prev} class="absolute left-3 top-3"><IconArrowLeft class="h-5 w-5" /></button>
	<div class="flex w-full flex-col justify-center gap-y-4">
		<h3 class="mx-auto">Try Portfolio Labs for 14 days</h3>
		<TextToggle options={toggleOptions} onChange={handleChange} />
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
			{#if selectedProduct}
				<div>
					<div class="text-base">${(selectedProduct.unit_amount || 0) / 100} / {selectedProduct.interval}</div>
					<div class="text-sm text-green-700">{selectedProduct.yearly_price !== maxPrice ? 'save ' + formatPercent(1 - selectedProduct.yearly_price / maxPrice) : ''}</div>
				</div>
			{/if}
		</div>

		<!-- ----------------------
	STRIPE ELEMENTS
	---------------------- -->
		<form id="payment-form">
			<div id="payment-element" />
			<button id="submit" class="submit mt-4 w-full">Submit</button>
			<div id="error-message" />
		</form>
	</div>
	<p class="p-2 text-sm text-slate-400 dark:text-slate-500">
		You are opting for a subscription plan, which includes a 14-day free trial. The plan can either be yearly at $200 or monthly at $20. Following the end of the free trial, your credit card will be
		automatically billed based on the subscription plan you chose. You have the right to cancel your subscription at any time. In case of cancellation, you'll retain access to the services until the
		end of your current billing period. By finalizing this subscription, you agree to these terms.
	</p>
</div>
