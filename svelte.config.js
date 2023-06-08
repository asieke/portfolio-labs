import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components',
			$svg: 'src/components/svg',
			$lib: 'src/lib',
			$stores: 'src/lib/stores',
			$styles: 'src/styles',
			$data: 'src/data',
			$models: 'src/models'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
