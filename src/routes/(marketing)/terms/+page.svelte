<script lang="ts">
	import { Container } from '../components';
	import { tos } from '$data/tos';
</script>

<Container>
	<div class="tos-large mx-auto px-4 py-12 max-w-xl text-justify text-sm">
		{@html tos}
	</div>
</Container>
