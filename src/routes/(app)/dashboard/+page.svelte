<script lang="ts">
	import { Container } from '$components/layout';

	export let data;

	console.log(data);
</script>

<Container layout="right">
	<div slot="left">
		<h3>Content</h3>
	</div>

	<div slot="right">
		<h3>Sidebar</h3>
	</div>
</Container>
