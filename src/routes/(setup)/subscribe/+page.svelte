<script lang="ts">
	import { Subscription, Lapsed } from '../components';

	let step = 0;
</script>

<div style="display:{step === 0 ? 'block' : 'none'}">
	<Lapsed next={() => (step = 1)} />
</div>

<div style="display:{step === 1 ? 'block' : 'none'}">
	<Subscription />
</div>
