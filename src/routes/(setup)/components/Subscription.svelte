<script lang="ts">
	import { PUBLIC_STRIPE_KEY, PUBLIC_APP_URL } from '$env/static/public';

	import { onMount } from 'svelte';
	import { formatCurrency } from '$lib/utils/format';
	import { createOrGetCustomer, getProducts, getPaymentMethods } from '$models/stripe';
	import { page } from '$app/stores';

	import axios from 'axios';

	import { loadStripe } from '@stripe/stripe-js';
	import type { Stripe as StripeJS, StripeElementsOptionsMode, StripeError } from '@stripe/stripe-js';
	import type { Stripe } from 'stripe';
	import type { StripeProduct } from '$types/stripe';

	import { CreditCard } from '$components/form';

	export let prev: (() => void) | null = null;

	let selectedProduct: StripeProduct | null = null;
	let selectedPaymentMethod: Stripe.PaymentMethod | null = null;
	let status: 'selection' | 'payment' = 'selection';

	const { supabase, profile } = $page.data;
	let stripe: StripeJS | null | undefined;
	let customer: Stripe.Customer | null;
	let products: StripeProduct[] | null;
	let paymentMethods: Stripe.PaymentMethod[] | null;

	onMount(async () => {
		console.log('mounted');
		customer = await createOrGetCustomer(supabase, profile);
		products = await getProducts();
		paymentMethods = await getPaymentMethods(customer?.id as string);

		//set the default payment method
		if (customer?.default_source) {
			selectedPaymentMethod = paymentMethods?.find((pm) => pm.id === customer?.default_source) || null;
		}
		if (!selectedPaymentMethod && paymentMethods && paymentMethods.length > 0) {
			selectedPaymentMethod = paymentMethods[0];
		}

		console.log('Customer: ', customer);
		console.log('Products: ', products);
		console.log('Payment Methods', paymentMethods);
		console.log('Selected Method', selectedPaymentMethod);

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
			submitBtn.style.backgroundColor = '';
			// const messageContainer = document.querySelector('#error-message');
			// if (messageContainer) {
			// 	messageContainer.textContent = error.message || '';
			// }
			// if (submitBtn) submitBtn.disabled = false;
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

			if (!selectedPaymentMethod) {
				const { error: submitError } = await elements.submit();
				if (submitError) {
					handleError(submitError);
					return;
				}
			}

			// Create the subscription
			const res = await axios.post('/api/stripe/create-subscription', {
				customerId: customer?.id,
				priceId: selectedProduct?.price_id,
				trial_period_days: 14,
				paymentMethod: selectedPaymentMethod ? selectedPaymentMethod.id : undefined
			});

			console.log('RESPONSE FROM create-subscription', res);

			const { type, clientSecret } = res.data;

			console.log(type, clientSecret);

			const confirmIntent = type === 'setup' ? stripe.confirmSetup : stripe.confirmPayment;

			const confirmParams = selectedPaymentMethod ? { return_url: PUBLIC_APP_URL + '/welcome', payment_method: selectedPaymentMethod.id } : { return_url: PUBLIC_APP_URL + '/welcome' };

			// Confirm the Intent using the details collected by the Payment Element
			const { error } = await confirmIntent({
				elements: selectedPaymentMethod ? undefined : elements,
				clientSecret,
				confirmParams
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
	});
</script>

<div class="mx-auto min-h-screen max-w-4xl grid-cols-1">
	<div class="ml-8 mr-8 min-h-screen border-l-[1px] border-r-[1px] border-dashed border-slate-500 border-opacity-10 py-8 md:py-16">
		<div class="-ml-[3px] rounded-lg bg-white shadow-2xl" style="width: calc(100% + 6px)">
			<div class="flex flex-col md:flex-row">
				<div class="w-full space-y-4 rounded-t-lg bg-primary-500 p-8 md:w-2/5 md:rounded-l-lg md:rounded-t-none md:p-12 md:px-12">
					<div>
						<h4 class="text-slate-300">Portfolio Labs</h4>
						<h3 class="text-2xl font-bold text-white">Select Your Plan</h3>
					</div>
					<div>
						<h4 class="text-sm font-bold text-slate-100">14 Day Trial</h4>
						<p class="text-xs text-slate-200">Try Portfolio Labs free for 14 days. Your credit card will not be automaticlaly charged</p>
					</div>
					<div>
						<h4 class="text-sm font-bold text-slate-100">Financial Plan</h4>
						<p class="text-xs text-slate-200">Connect all of your accounts and get your detailed portfolio allocation recommendation.</p>
					</div>
				</div>
				<div class="w-full rounded-b-lg bg-white p-8 md:w-3/5 md:rounded-b-none md:rounded-r-lg md:p-12 md:px-16">
					{#if prev}
						<button class="mb-5 text-left text-sm text-black" on:click|preventDefault={prev}>← Back</button>
					{/if}
					{#if products && status === 'selection'}
						<div class="space-y-4">
							{#each products as product}
								<button on:click={() => (selectedProduct = product)} class="option w-full {product.product_id === selectedProduct?.product_id ? 'border-primary-500' : ''}">
									<span class="flex items-center">
										<span class="flex flex-col text-left">
											<span class="font-medium text-gray-900">{product.name} Plan</span>
											<span class="text-xs text-gray-500">Your card will be billed {product.interval}ly</span>
										</span>
									</span>
									<span id="server-size-0-description-1" class="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right">
										<span class="font-medium text-gray-900">{formatCurrency(product.monthly_price / 100)}</span>
										<span class="ml-1 text-gray-500 sm:ml-0">/mo</span>
									</span>
								</button>
							{/each}
						</div>
					{/if}

					<div style={selectedProduct ? '' : 'height: 0px; overflow:hidden'} class="mt-8 transition-all ease-in-out">
						<form id="payment-form">
							{#if paymentMethods && paymentMethods.length > 0}
								<h3 class="mb-4 font-bold">Select a Payment Method</h3>
								<div class="mb-2 flex flex-row space-x-2">
									{#each paymentMethods as paymentMethod}
										<button class="creditCard {selectedPaymentMethod?.id === paymentMethod?.id ? 'border-primary-500' : ''}" on:click|preventDefault={() => (selectedPaymentMethod = paymentMethod)}>
											<CreditCard card={paymentMethod?.card} />
										</button>
									{/each}
									<button class="creditCard {!selectedPaymentMethod ? 'border-primary-500' : ''}" on:click|preventDefault={() => (selectedPaymentMethod = null)}> New Card </button>
								</div>
							{/if}

							<div style={!selectedPaymentMethod ? '' : 'height: 0px; overflow:hidden'}>
								<div id="payment-element" />
							</div>
							<button id="submit" class="submit mt-4 w-full">Submit</button>
							<div id="error-message" />
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	button.option {
		@apply cursor-pointer rounded-lg border-2 bg-white px-6 py-4 sm:flex sm:justify-between;
	}
	button.option:hover {
		@apply border-primary-500;
	}

	button.creditCard {
		@apply mb-3 w-full rounded-lg border-[2px] px-1 py-2 text-xs hover:border-primary-500;
	}
</style>
