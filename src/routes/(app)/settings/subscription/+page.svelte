<script lang="ts">
	import { onMount } from 'svelte';
	import { timestampToDate } from '$lib/utils/dates';
	import { getSubscriptions, getPaymentMethod, getPaymentMethods, getCustomer } from '$models/stripe';
	import type { Stripe } from 'stripe';
	import { CreditCard } from '$components/form';

	export let data;
	const { profile } = data;

	let subscription: Stripe.Subscription | null = null;
	let paymentMethod: Stripe.PaymentMethod | null = null;

	onMount(async () => {
		subscription = (await getSubscriptions(profile.stripe_customer_id)).data[0] as Stripe.Subscription;
		const customer = await getCustomer(profile.stripe_customer_id);
		paymentMethod = await getPaymentMethod(customer.invoice_settings.default_payment_method || customer.default_source);

		console.log(subscription);
		console.log(customer);
		console.log(paymentMethod);
	});
</script>

<h4>My Subscription</h4>

<div class="mt-4 space-y-4">
	{#if subscription}
		{#if subscription.status === 'active' && paymentMethod}
			{#if subscription.cancel_at_period_end}
				<div class="success flex justify-between rounded-lg p-2">
					<span>Your Subscription is active until {timestampToDate(subscription.current_period_end)}</span>
				</div>
				<p>
					You have successfully canceled your subscription, your credit card will not be billed again. You may continue to use Portfolio Labs until {timestampToDate(subscription.current_period_end)}.
				</p>
				<p>You may renew your trial at any time</p>
			{:else}
				<div class="success flex justify-between rounded-lg p-2">
					<span>Your Subscription is Active</span>
				</div>
				<CreditCard card={paymentMethod.card} format="wide" />
				<div>
					<p>
						You are currently subscribed to the {subscription.items.data[0].plan.interval}ly plan. Your card will be billed ${(subscription.items.data[0].plan.amount || 0) / 100} on {timestampToDate(
							subscription.current_period_end
						)}
					</p>
				</div>
			{/if}
		{/if}
		{#if subscription.status === 'trialing' && paymentMethod}
			<div class="warning flex justify-between rounded-lg p-2">
				<span>14 day Trial ends: {timestampToDate(subscription.current_period_end)}</span>
			</div>
			{#if subscription.cancel_at_period_end}
				<p>
					You have successfully canceled your free trial, your credit card will not be billed again. You may continue to use Portfolio Labs until {timestampToDate(subscription.current_period_end)}.
				</p>
				<p>You may renew your trial at any time</p>
			{:else}
				<CreditCard card={paymentMethod.card} format="wide" />
				<p>
					After your trial, your card will automatically be billed ${(subscription.items.data[0].plan.amount || 0) / 100}, and you will be subscribed to the {subscription.items.data[0].plan
						.interval}ly plan. You may cancel at any time.
				</p>
			{/if}
		{/if}
	{/if}

	<form method="POST" action="/api/stripe/create-customer-portal-session">
		<input type="hidden" name="customerID" value={profile.stripe_customer_id} />
		<button type="submit" class="submit">Manage My Subscription</button>
	</form>
</div>
