<script lang="ts">
	import { Container } from '$components/layout';
	import Sidebar from './components/Sidebar.svelte';
</script>

<Container layout="left">
	<div slot="left"><Sidebar /></div>
	<div slot="right"><slot /></div>
</Container>
