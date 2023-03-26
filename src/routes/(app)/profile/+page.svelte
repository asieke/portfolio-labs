<script lang="ts">
	import { Container } from '$components/layout';
	import { ProfileForm } from '$components/settings';
</script>

<div class="grid grid-cols-1 lg:grid-cols-rightcol gap-4">
	<div class="row-span-2"><Container><ProfileForm /></Container></div>
	<div class="space-y-4"><Container>Right Div 1</Container><Container>Right Div 2</Container></div>
</div>

<style lang="postcss">
</style>
