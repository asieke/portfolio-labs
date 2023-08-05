<script lang="ts">
	import { Logo } from '$components/brand';
	import { Container } from '$components/layout';
	import { page } from '$app/stores';

	//get all the query parameters from $page
	let query: Record<string, string> = {};

	$page.url.searchParams.forEach((value, key) => {
		query[key] = value;
	});
</script>

<Container layout="tight">
	<div class="w-[80vw] md:w-[500px]">
		<div class="flex w-full flex-col items-center justify-center">
			<Logo class="mb-3 h-8 w-8" />
			<h4 class="text-center font-semibold">Welcome to Portfolio Labs, !</h4>

			<a href="/dashboard"> <button class="submit mt-4 w-full">Go to Dashboard</button></a>
		</div>
	</div>
</Container>
