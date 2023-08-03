<script lang="ts">
	import { Logo } from '$components/brand';
	import type { Profile } from '$types/profiles';
	import { IconSpinner } from '$components/svg';

	export let profile: Profile;
	export let prev = () => {};
	export let next = async () => {};

	let loading = false;
	const handleClick = async () => {
		loading = true;
		await next();
		loading = false;
	};

	profile.financial_information = {
		'Net Worth': profile?.financial_information?.['Net Worth'] || '',
		Income: profile?.financial_information?.['Income'] || '',
		'Tax Filing Status': profile?.financial_information?.['Tax Filing Status'] || '',
		'Employment Status': profile?.financial_information?.['Employment Status'] || '',
		'Job Title': profile?.financial_information?.['Job Title'] || ''
	};
</script>

{#if profile.financial_information}
	<form>
		<div class="flex w-full flex-col items-center justify-center">
			<Logo class="mb-3 h-8 w-8" />
			<h4 class="text-center font-semibold">Financial Information</h4>
			<p class="w-full text-left">You financial information helps us build a customized inancial plan for you</p>
			<div class="mt-4 w-full">
				<form class="space-y-4">
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

					<div class="flex flex-row pt-3">
						<button class="cancel w-1/3" on:click|preventDefault={prev}>Previous</button>
						{#if loading}
							<button class="submit w-2/3" disabled>Next <IconSpinner class="h-5 w-5" /></button>
						{:else}
							<button class="submit w-2/3" on:click|preventDefault={handleClick}>Next</button>
						{/if}
					</div>
				</form>
			</div>
		</div>
	</form>
{/if}
