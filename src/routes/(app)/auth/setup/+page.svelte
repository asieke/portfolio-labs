<script lang="ts">
	import { updateProfile } from '$models/profile';
	import { Container } from '$components/layout';
	import Step1AccountInformation from './components/Step1AccountInformation.svelte';
	import Step2FinancialInformation from './components/Step2FinancialInformation.svelte';
	import Step3TermsOfService from './components/Step3TermsOfService.svelte';
	import Step4Subscription from './components/Step4Subscription.svelte';
	import Step5ThankYou from './components/Step5ThankYou.svelte';
	import { onMount } from 'svelte';
	import type { StripeProduct } from '$types/stripe';

	import { getProducts } from '$models/stripe';

	let products: StripeProduct[];

	onMount(async () => {
		products = await getProducts();
	});

	export let data;
	const { profile, supabase } = data;

	let step = 3;

	const next = async () => {
		await updateProfile(supabase, profile);
		step = step + 1;
	};
	const prev = () => {
		step = step - 1;
	};
</script>

{#if profile}
	<Container layout="tight">
		<div class="w-[80vw] md:w-[500px]">
			{#if step === 1}
				<Step1AccountInformation {profile} {next} />
			{:else if step === 2}
				<Step2FinancialInformation {profile} {next} {prev} />
			{:else if step === 3}
				<Step3TermsOfService {profile} {next} {prev} />
			{:else if step === 4}
				{#if products}
					<Step4Subscription {profile} {next} {prev} {products} />
				{/if}
			{:else if step === 5}
				<Step5ThankYou />
			{/if}
		</div>
	</Container>
{/if}
