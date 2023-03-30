<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { Error } from '$components/elements';
	import type { ErrorMessage } from '$lib/types';
	import axios from 'axios';

	import { goto } from '$app/navigation';

	let formData = {
		email: '',
		password: ''
	};

	let errorMessage: ErrorMessage | null = null;

	const closeErrorMessage = () => {
		errorMessage = null;
	};

	const submit = async () => {
		console.log('Logging in ', formData);
	};
</script>

<div class="grid grid-cols-1 md:grid-cols-[58%_42%] lg:grid-cols-2 h-full overflow-hidden">
	<div class="pt-[25%] bg-white z-20 p-8 sm:pl-16">
		<div class="w-80 sm:w-96 mx-auto">
			<img class="h-12 w-auto" src="/logo.png" alt="Your Company" />

			<form on:submit|preventDefault={submit}>
				<h2>Sign in to your account</h2>
				<p class="text-gray-500 mb-8" />
				<label for="email">Email address</label>
				<input bind:value={formData.email} type="email" autocomplete="off" required />
				<label for="password">Password</label>
				<input bind:value={formData.password} type="password" autocomplete="off" required />

				<input type="submit" value="Login" class="btn-primary mt-8 w-full" />
				<Error error={errorMessage} class="mt-6" />
			</form>
		</div>
	</div>
	<div class="hidden md:block relative">
		<img class="object-cover h-full" src="/images/errorbg.png" alt="" />
		<div class="pane" />
	</div>
</div>

<style lang="postcss">
	.pane {
		@apply bg-white absolute w-36 -bottom-24 -top-24 -left-20;
		transform: rotate(8deg);
	}

	input[type='submit']:hover {
		@apply bg-primary-400 cursor-pointer;
	}

	input[type='email'],
	input[type='password'] {
		@apply w-full px-3 py-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600;
	}

	label {
		@apply block text-sm font-medium leading-6 text-gray-900 mt-4;
	}

	h2 {
		@apply mt-4 mb-6 text-3xl font-bold tracking-tight text-gray-900;
	}
</style>
