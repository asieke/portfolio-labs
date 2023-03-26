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
		backdrop-filter: blur(100px);
	}

	.marketing-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/images/bg.png');
		opacity: 0.1;
		@apply blur-3xl;
		z-index: -20;
	}
</style>
