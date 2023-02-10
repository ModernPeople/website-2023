import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

// import importAssets from 'svelte-preprocess-import-assets'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		// https://github.com/bluwy/svelte-preprocess-import-assets
		// importAssets(), 

		vitePreprocess(),
	],
	kit: {
		adapter: adapter(),
		alias: {
			'$icons': 'src/icons',
		}
	}
};

export default config;
