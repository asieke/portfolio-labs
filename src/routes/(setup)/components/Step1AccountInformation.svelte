<script lang="ts">
	import type { Profile } from '$types/profiles';
	import { page } from '$app/stores';
	import { checkFullName, checkDOB, checkAddress, checkPhone } from '$lib/utils/validation';
	import { updateProfile } from '$models/profile';
	import { Stepper } from './';

	export let profile: Profile;
	export let next: () => void;

	const { supabase } = $page.data;

	let full_name = checkFullName({ value: profile.full_name }, false);
	let dob = checkDOB({ value: profile.dob }, false);
	let address = checkAddress({ value: profile.address }, false);
	let phone = checkPhone({ value: profile.phone }, false);

	const handleClick = async () => {
		full_name = checkFullName(full_name, true);
		dob = checkDOB(dob, true);
		address = checkAddress(address, true);
		phone = checkPhone(phone, true);

		if (full_name.valid && dob.valid && address.valid && phone.valid) {
			const updatedProfile = {
				full_name: full_name.value,
				dob: dob.value,
				address: address.value,
				phone: phone.value
			};
			await updateProfile(supabase, { ...profile, ...updatedProfile } as Profile);
			next();
		}
	};
</script>

<div class="mx-auto min-h-screen max-w-xl grid-cols-1">
	<div class="ml-8 mr-8 min-h-screen border-l-[1px] border-r-[1px] border-dashed border-slate-500 border-opacity-10 py-8 md:ml-0 md:py-16">
		<div class="-ml-[3px] rounded-lg bg-white p-8 shadow-2xl md:p-12 md:px-16" style="width: calc(100% + 6px)">
			<h3 class="text-xl font-bold leading-8 antialiased">Time to Set Up Your Account!</h3>
			<form class="mt-4 space-y-4">
				<div>
					<label for="dob">Full Name<span class="error"> {full_name.error}</span></label>
					<input bind:value={full_name.value} on:blur={() => (full_name = checkFullName(full_name))} type="text" name="name" placeholder="Warren Buffet" />
				</div>
				<div>
					<label for="dob">Date of Birth<span class="error"> {dob.error}</span></label>
					<input type="date" name="dob" bind:value={dob.value} on:blur={() => (dob = checkDOB(dob))} />
				</div>
				<div>
					<label for="address">Address<span class="error"> {address.error}</span></label>
					<input bind:value={address.value} on:blur={() => (address = checkAddress(address))} type="text" name="address" placeholder="123 Wallabee Lane" />
				</div>
				<div>
					<label for="phone">Phone Number<span class="error"> {phone.error}</span></label>
					<input bind:value={phone.value} on:blur={() => (phone = checkPhone(phone))} type="tel" name="phone" placeholder="1234567890" />
				</div>
				<div class="flex w-full flex-col items-center space-y-4 py-4">
					<button class="submit" on:click|preventDefault={next}>Continue → </button>
					<Stepper steps={4} current={1} />
				</div>
			</form>
		</div>
	</div>
</div>
