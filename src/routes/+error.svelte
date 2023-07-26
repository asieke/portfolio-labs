<script lang="ts">
	import { page } from '$app/stores';

	const { status: statusCode } = $page;
	let errorMessage = '';

	switch (statusCode) {
		case 404:
			errorMessage = 'Page not found.';
			break;
		case 500:
			errorMessage = 'Internal server error.';
			break;
		case 403:
			errorMessage = 'Forbidden.';
			break;
		case 401:
			errorMessage = 'Unauthorized.';
			break;
		default:
			errorMessage = $page?.error?.message || '';
			break;
	}
</script>

<section class="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
	<div class="w-full max-w-md space-y-8">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
				{statusCode}
			</h2>
			<p class="mt-2 text-center text-sm text-gray-600">
				{errorMessage}
			</p>
		</div>
		<div class="flex w-full justify-center">
			<a href="/" class="block w-[200px] rounded-lg bg-indigo-600 px-3 py-2 text-center font-medium text-white shadow-md hover:bg-indigo-700">Go back to home</a>
		</div>
	</div>
</section>
