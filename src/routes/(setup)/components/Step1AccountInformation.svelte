<script lang="ts">
	import { Stepper } from './';
</script>

<h3 class="text-xl font-bold leading-8 antialiased">Time to Set Up Your Account!</h3>
<form class="mt-4 space-y-4">
	<div>
		<label for="dob">Date of Birth</label>
		<input type="date" name="dob" />
	</div>
	<div>
		<label for="address">Address</label>
		<input type="text" name="address" />
	</div>
	<div>
		<label for="phone">Phone Number</label>
		<input type="text" name="phone" />
	</div>
	<div class="pt-4">
		<button class="submit">Continue →</button>
	</div>
</form>
<div class="mx-auto flex w-full justify-center pt-4">
	<Stepper />
</div>
