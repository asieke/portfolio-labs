<script lang="ts">
	import { updateProfile } from '$models/profile';
	import { Container } from '$components/layout';
	import Step0Hello from './components/Step0Hello.svelte';
	import Step1AccountInformation from './components/Step1AccountInformation.svelte';
	import Step2FinancialInformation from './components/Step2FinancialInformation.svelte';
	import Step3TermsOfService from './components/Step3TermsOfService.svelte';
	import Step4Subscription from './components/Step4Subscription.svelte';

	export let data;
	const { profile, supabase } = data;

	let step = 0;

	const next = async () => {
		await updateProfile(supabase, profile);
		step = step + 1;
	};
	const prev = () => {
		step = step - 1;
	};
</script>

<Container layout="tight">
	<div class="w-[80vw] md:w-[500px]">
		{#if profile && step === 0}
			<Step0Hello {profile} {next} />
		{/if}

		{#if profile && step > 0}
			<div style="display: {step === 1 ? 'block' : 'none'}">
				<Step1AccountInformation {profile} {next} {prev} />
			</div>
			<div style="display: {step === 2 ? 'block' : 'none'}">
				<Step2FinancialInformation {profile} {next} {prev} />
			</div>
			<div style="display: {step === 3 ? 'block' : 'none'}">
				<Step3TermsOfService {profile} {next} {prev} />
			</div>
			<div class={step === 4 ? '' : 'h-0 overflow-hidden'}>
				<Step4Subscription {prev} />
			</div>
		{/if}
	</div>
</Container>
