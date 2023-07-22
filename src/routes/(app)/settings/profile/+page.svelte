<script lang="ts">
	import { Container } from '$components/layout';
	import { updateProfile } from '$models/profile';
	import { IconSpinner } from '$components/svg';
	import { addToast } from '$lib/stores/toasts';
	export let data;

	const { profile, supabase } = data;
	let loading = false;

	const handleClick = async () => {
		loading = true;
		await updateProfile(supabase, profile);
		addToast('Profile updated successfully', 'success');
		loading = false;
	};
</script>

{#if profile}
	<form class="space-y-4">
		<div>
			<label for="email" class="">Full Name</label>
			<div class="mt-2">
				<input type="text" name="fullname" placeholder="Ada Lovelace" bind:value={profile.full_name} />
			</div>
		</div>
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
			</div>
		</div>
	</form>
	<div class="pt-8">
		{#if loading}
			<button class="submit w-full" disabled>Save Profile <IconSpinner class="h-5 w-5" /></button>
		{:else}
			<button class="submit w-full" on:click|preventDefault={handleClick}>Save Profile</button>
		{/if}
	</div>
{/if}
