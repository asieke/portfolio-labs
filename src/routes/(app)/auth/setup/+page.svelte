<script lang="ts">
	import { updateProfile } from '$models/profile';
	import { Container } from '$components/layout';
	import Step1AccountInformation from './components/Step1AccountInformation.svelte';
	import Step2FinancialInformation from './components/Step2FinancialInformation.svelte';
	import Step3TermsOfService from './components/Step3TermsOfService.svelte';
	import Step4ThankYou from './components/Step4ThankYou.svelte';

	export let data;
	const { profile, supabase } = data;

	let step = 1;

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
				<Step4ThankYou />
			{/if}
		</div>
	</Container>
{/if}
