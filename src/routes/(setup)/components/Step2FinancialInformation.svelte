<script lang="ts">
	import type { Profile } from '$types/profiles';
	import { page } from '$app/stores';
	import { updateProfile } from '$models/profile';
	import { Stepper } from './';

	export let profile: Profile;
	export let next: () => void;
	export let prev: () => void;

	const { supabase } = $page.data;

	profile.financial_information = {
		'Net Worth': profile?.financial_information?.['Net Worth'] || '',
		Income: profile?.financial_information?.['Income'] || '',
		'Tax Filing Status': profile?.financial_information?.['Tax Filing Status'] || '',
		'Employment Status': profile?.financial_information?.['Employment Status'] || '',
		'Job Title': profile?.financial_information?.['Job Title'] || ''
	};

	const handleClick = async () => {
		await updateProfile(supabase, profile);
		next();
	};
</script>

<div class="mx-auto min-h-screen max-w-xl grid-cols-1">
	<div class="ml-8 mr-8 min-h-screen border-l-[1px] border-r-[1px] border-dashed border-slate-500 border-opacity-10 py-8 md:ml-0 md:py-16">
		<div class="-ml-[3px] rounded-lg bg-white p-8 shadow-2xl md:p-12 md:px-16" style="width: calc(100% + 6px)">
			<button class="mb-3 text-left text-sm text-slate-500" on:click|preventDefault={prev}>← Back</button>
			<h3 class="text-xl font-bold leading-8 antialiased">Financial Information</h3>
			<p class="my-3 text-sm text-slate-600">This information helps us better develop your personalized financial plan</p>
			<form class="mt-4 space-y-4">
				<div>
					<label for="netWorth" class="">Net Worth</label>
					<div class="mt-2">
						<select id="netWorth" bind:value={profile.financial_information['Net Worth']}>
							<option value="" selected disabled>--Please choose an option--</option>
							<option value="< $50,000">&lt; $50,000</option>
							<option value="$50,000 - $100,000">$50,000 - $100,000</option>
							<option value="$100,000 - $500,000">$100,000 - $500,000</option>
							<option value="$500,000 - $1M">$500,000 - $1M</option>
							<option value="$1M - $5M">$1M - $5M</option>
							<option value="$5M - $10M">$5M - $10M</option>
							<option value="> $10M">&gt; $10M</option>
						</select>
					</div>
				</div>
				<div>
					<label for="income" class="">Yearly Income</label>
					<div class="mt-2">
						<select id="income" bind:value={profile.financial_information['Income']}>
							<option value="" selected disabled>--Please choose an option--</option>
							<option value="< $50,000">&lt; $50,000</option>
							<option value="$50,000 - $100,000">$50,000 - $100,000</option>
							<option value="$100,000 - $200,000">$100,000 - $200,000</option>
							<option value="$200,000 - $500,000">$200,000 - $500,000</option>
							<option value="$500,000 - $1M">$500,000 - $1M</option>
							<option value="> $1M">&gt; $1M</option>
						</select>
					</div>
				</div>
				<div>
					<label for="taxFilingStatus" class="">Tax Filing Status</label>
					<div class="mt-2">
						<select id="taxFilingStatus" bind:value={profile.financial_information['Tax Filing Status']}>
							<option value="" disabled>--Please choose an option--</option>
							<option value="Single">Single</option>
							<option value="Married Filing Jointly">Married Filing Jointly</option>
							<option value="Married Filing Separately">Married Filing Separately</option>
							<option value="Head of Household">Head of Household</option>
							<option value="Qualifying Widow(er) with Dependent Child">Qualifying Widow(er) with Dependent Child</option>
						</select>
					</div>
				</div>
				<div>
					<label for="employmentStatus" class="">Employment Status</label>
					<div class="mt-2">
						<select id="employmentStatus" bind:value={profile.financial_information['Employment Status']}>
							<option value="" disabled>--Please choose an option--</option>
							<option value="Employed">Employed</option>
							<option value="Unemployed">Unemployed</option>
							<option value="Self-Employed">Self-Employed</option>
							<option value="Student">Student</option>
							<option value="Retired">Retired</option>
							<option value="Unable to work">Unable to work</option>
						</select>
					</div>
				</div>
				<div>
					<label for="email" class="">Job Title</label>
					<div class="mt-2">
						<input type="text" bind:value={profile.financial_information['Job Title']} />
					</div>
				</div>
				<div class="flex w-full flex-col items-center space-y-4 py-4">
					<button class="submit" on:click|preventDefault={handleClick}>Continue → </button>
					<Stepper steps={4} current={2} />
				</div>
			</form>
		</div>
	</div>
</div>
