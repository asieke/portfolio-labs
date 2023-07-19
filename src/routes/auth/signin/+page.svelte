<script lang="ts">
	import { Container } from '$components/layout';

	let email = 'asieke@gmail.com';

	const handleSubmit = () => {
		console.log('time to log in => ', email);
	};
</script>

<Container layout="tight">
	<div class="w-[50vw] md:w-[400px]">
		<h3 class="text-center">Sign in to your account</h3>

		<div class="mt-5">
			<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
			<div class="mt-2">
				<input
					bind:value={email}
					id="email"
					name="email"
					type="email"
					autocomplete="email"
					required
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>

		<button class="submit mt-6 w-full" on:click={handleSubmit}>Sign In</button>
		<p class="mt-10 text-center text-sm text-gray-500">
			Not a member?
			<a href="/" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
		</p>
	</div>
</Container>
