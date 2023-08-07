<!--
 @component CreditCard
  A credit card component that displays the card number, expiration date, and CVC.
 @param {obj} card object with card number, expiration date, and CVC.
-->

<script lang="ts">
	import type { Stripe } from 'stripe';
	export let card: Stripe.PaymentMethod.Card | null | undefined;

	const brands: Record<string, string> = {
		visa: '/icons/payment/visa.png',
		mastercard: '/icons/payment/mastercard.png',
		amex: '/icons/payment/amex.png',
		discover: '/icons/payment/discover.png'
	};

	const src = card && card.brand ? brands[card?.brand] : '/icons/payment/generic.png';
</script>

<div class="space-y-1 px-2 text-xs text-slate-500">
	<div class="flex flex-row items-center justify-between">
		<img {src} alt={card?.brand} class="w-[32px]" />
		<div>{card?.last4}</div>
	</div>
	<div>{card?.exp_month} / {card?.exp_year}</div>
</div>
