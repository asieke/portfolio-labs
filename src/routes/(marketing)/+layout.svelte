<script lang="ts">
	import '$styles/marketing.css';
	import { Header, Footer } from './components';
	import { page } from '$app/stores';
	console.log($page);
</script>

<Header />

{#if $page.route.id?.includes('blog')}
	<slot />
	<div
		class="fixed bg-gradient-to-b from-primary-500 to-cyan-500 opacity-50 -z-50 h-[600px] -top-72 -rotate-[10deg] -left-96 -right-96"
	/>
	<div
		class="fixed bg-primary-500 opacity-30 -z-50 h-48 -rotate-[10deg] top-72 -left-96 -right-96"
	/>
{:else}
	<div class="marketing-container">
		<slot />
	</div>
{/if}
<Footer />

<style lang="postcss">
	.marketing-container {
		z-index: -10;
		height: 100%;
		padding: 0;
		margin: 0;
		position: relative;
	}

	.marketing-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		height: 100%;
		width: 100%;
		/* @apply blur-3xl; */
		background-image: url('/images/bg.png');
		/* stretch background image to fit 100% width */

		background-size: 100%;
		@apply blur-3xl;
		opacity: 0.2;
		z-index: -20;
	}
</style>
