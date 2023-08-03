<script lang="ts">
	// import { phone } from '$lib/stores/phone';
	// import { updatePhone } from '$lib/utils/phone';
	import type { Profile } from '$types/profiles';
	import { Logo } from '$components/brand';
	import { IconSpinner } from '$components/svg';

	export let profile: Profile;
	export let next = async () => {};
	export let prev = () => {};

	let loading = false;
	const handleClick = async () => {
		loading = true;
		await next();
		loading = false;
	};
</script>

<div class="flex w-full flex-col items-center justify-center">
	<Logo class="mb-3 h-8 w-8" />
	<h4 class="text-center font-semibold">Welcome to Portfolio Labs!</h4>
	<p>Please finish setting up your account to continue</p>
	<div class="w-full">
		<form class="space-y-4">
			<div>
				<label for="email" class="">Email</label>
				<div class="mt-2">
					<p>{profile.email}</p>
				</div>
			</div>
			<div>
				<label for="email">Date of Birth</label>
				<div class="mt-2">
					<input type="date" name="address" placeholder="123 Wallabee Lane" bind:value={profile.dob} />
				</div>
			</div>
			<div>
				<label for="email">Address</label>
				<div class="mt-2">
					<input type="text" name="address" placeholder="123 Wallabee Lane" bind:value={profile.address} />
				</div>
			</div>
			<div>
				<label for="email">Phone</label>
				<div class="mt-2">
					<input type="text" name="phone" placeholder="(281)-330-8004" bind:value={profile.phone} />
					<!-- <input type="text" name="phone" placeholder="(281)-330-8004" bind:this={phone} on:input={updatePhone} /> -->
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
