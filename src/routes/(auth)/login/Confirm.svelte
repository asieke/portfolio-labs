<script lang="ts">
	export let email: string;
</script>

<div class="w-full text-center flex flex-col justify-center items-center">
	<h1 class="text-xl font-semibold">Please check your email</h1>
	<!-- <div class="wiggle h-8 w-8 mt-4">
    <Email class="h-8 w-8" />
  </div> -->
	<p class="mt-4 leading-7">We are sending a Magic Link to {email}</p>
	<a href="/login" class="mt-4 text-sm text-primary-600 hover:underline">← Back to login</a>
</div>
