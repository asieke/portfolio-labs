<script lang="ts">
	import axios from 'axios';

	export let data;
	console.log(data);

	const createCustomer = async () => {
		try {
			const response = await axios.post(
				'/create-customer',
				{
					email: 'asieke@gmail.com'
				},
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);

			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};
</script>

<h3>Subscription</h3>

<button class="submit" on:click={createCustomer}>Create Customer</button>
