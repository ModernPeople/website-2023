import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

// import importAssets from 'svelte-preprocess-import-assets'

const dev = process.argv.includes('dev');

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
		paths: {
			relative: false,
			// TODO: for Github Pages compatibility, remove once served from custom domain
			base: dev ? '' : '/website-2023',
		},
		alias: {
			'$icons': 'src/icons',
			'$components/*': 'src/lib/components/*',
		}
	}
};

export default config;
