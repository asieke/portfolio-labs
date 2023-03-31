<script lang="ts">
	import { page } from '$app/stores';
	const { supabase } = $page.data;

	let email = 'asieke@gmail.com';

	const submit = async () => {
		const { data, error } = await supabase.auth.signInWithOtp({
			email: email,
			options: {
				emailRedirectTo: 'http://localhost:5173/landing'
			}
		});
		console.log(data, error);
	};
</script>

<div class="w-80 sm:w-96 mx-auto">
	<img class="h-12 w-auto" src="/logo.png" alt="Your Company" />

	<form on:submit|preventDefault={submit}>
		<h2>Sign in to your account</h2>
		<p class="text-gray-500 mb-8" />
		<label for="email">Email address</label>
		<input bind:value={email} type="email" autocomplete="off" required />
		<!-- <label for="password">Password</label>
				<input bind:value={formData.password} type="password" autocomplete="off" required /> -->

		<input type="submit" value="Login" class="btn-primary mt-8 w-full" />
	</form>
</div>

<style lang="postcss">
	input[type='submit']:hover {
		@apply bg-primary-400 cursor-pointer;
	}

	input[type='email'] {
		@apply w-full px-3 py-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600;
	}

	label {
		@apply block text-sm font-medium leading-6 text-gray-900 mt-4;
	}

	h2 {
		@apply mt-4 mb-6 text-3xl font-bold tracking-tight text-gray-900;
	}
</style>
