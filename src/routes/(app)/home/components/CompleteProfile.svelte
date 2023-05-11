<script lang="ts">
	import { page } from '$app/stores';
	import { Container } from '$components/layout';
	import type { ProfilesRow } from '$lib/types';

	import Stepper from './Stepper.svelte';
	import FormProfile from './FormProfile.svelte';
	import FormFinancial from './FormFinancial.svelte';

	const { supabase } = $page.data;

	export let formData: ProfilesRow;
	let currentStep = 0;
	let loading = false;

	let steps = [
		{
			name: 'Profile',
			description: 'Name and email',
			status: 'current'
		},
		{
			name: 'Financial',
			description: 'Financial information',
			status: 'upcoming'
		},
		{
			name: 'Employment',
			description: 'Employment history',
			status: 'upcoming'
		},
		{
			name: 'Review',
			description: 'Accept terms',
			status: 'upcoming'
		}
	];

	const update = (step: number) => {
		if (['complete', 'current'].includes(steps[step].status)) {
			currentStep = step;
		}
	};

	const advance = async () => {
		loading = true;
		if (
			currentStep === 0 &&
			formData.full_name &&
			formData.dob &&
			formData.address &&
			formData.phone
		) {
			await supabase.from('profiles').upsert(formData);
			currentStep = 1;
			steps[0].status = 'complete';
			steps[1].status = 'current';
			loading = false;
			return;
		}

		if (currentStep === 1 && formData.income && formData.net_worth) {
			await supabase.from('profiles').upsert(formData);
			currentStep = 2;
			steps[1].status = 'complete';
			steps[2].status = 'current';
			loading = false;
			return;
		}
	};

	const signout = () => {
		supabase.auth.signOut();
	};
</script>

<Container>
	<h1 class="w-full border-b-[1px] pb-4">
		<span>Please Complete Your Profile</span>
		<button on:click={signout}>Sign Out</button>
	</h1>
	<div class="p-3 grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-8">
		<div class="hidden sm:flex">
			<Stepper {steps} {currentStep} {update} />
		</div>
		<div>
			{#if currentStep === 0}<FormProfile {formData} />{/if}
			{#if currentStep === 1}<FormFinancial {formData} />{/if}

			<button on:click={advance} disabled={loading}>
				{loading ? '....loading' : 'Next Step'}
			</button>
		</div>
	</div>
</Container>

<style lang="postcss">
	h1 {
		@apply text-3xl font-semibold tracking-tight mb-4 flex flex-row justify-between;
	}
	button {
		@apply rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600;
	}

	button:disabled {
		@apply bg-gray-600;
	}
</style>
