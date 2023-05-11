<script lang="ts">
	import type { ProfilesRow } from '$lib/types';
	import { onMount } from 'svelte';
	import { formatPhone } from '$lib/shared/formatters';
	export let formData: ProfilesRow;

	let phone: HTMLInputElement;

	onMount(() => {
		phone.value = formatPhone(formData.phone as string);
	});

	const updatePhone = () => {
		formData.phone = phone.value.replace(/\D/g, '');
		phone.value = formatPhone(formData.phone as string);
	};

	// const preventNonNumeric = (e: KeyboardEvent) => {
	// 	//if phone.value contains > 14 characters, prevent input
	// 	if (e.key.match(/[^0-9]/g) || phone.value.length > 13) {
	// 		e.preventDefault();
	// 	}
	// };
</script>

<div>
	<div>
		<label for="email" class="">Full Name</label>
		<div class="mt-2">
			<input
				type="text"
				name="fullname"
				placeholder="Ada Lovelace"
				bind:value={formData.full_name}
			/>
		</div>
	</div>
	<div>
		<label for="email">Date of Birth</label>
		<div class="mt-2">
			<input type="date" name="address" placeholder="123 Wallabee Lane" bind:value={formData.dob} />
		</div>
	</div>
	<div>
		<label for="email">Address</label>
		<div class="mt-2">
			<input
				type="text"
				name="address"
				placeholder="123 Wallabee Lane"
				bind:value={formData.address}
			/>
		</div>
	</div>
	<div>
		<label for="email">Phone</label>
		<div class="mt-2">
			<input
				type="text"
				name="phone"
				placeholder="(281)-330-8004"
				bind:this={phone}
				on:input={updatePhone}
			/>
		</div>
	</div>
</div>

<style lang="postcss">
	input {
		@apply mb-6 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;
	}

	label {
		@apply block text-sm font-medium leading-6 text-gray-900;
	}
</style>
