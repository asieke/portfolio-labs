<script lang="ts">
	import '$styles/app.css';
	import '$styles/marketing.css';
</script>

<div class="grid grid-cols-1 md:grid-cols-[58%_42%] lg:grid-cols-2 h-full overflow-hidden">
	<div class="pt-[15%] sm:pt-[20%] bg-white z-20 p-8 sm:pl-16">
		<slot />
	</div>
	<div class="hidden md:block relative">
		<img class="object-cover h-full" src="/images/errorbg.png" alt="" />
		<div class="pane" />
	</div>
</div>

<style lang="postcss">
	.pane {
		@apply bg-white absolute w-36 -bottom-24 -top-24 -left-20;
		transform: rotate(8deg);
	}
</style>
