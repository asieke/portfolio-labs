<script lang="ts">
	import '$styles/marketing.css';
	import { Header, Footer } from './components';
</script>

<Header />
<div class="marketing-container">
	<slot />
</div>

<Footer />

<style lang="postcss">
	.marketing-container {
		z-index: 1;
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
