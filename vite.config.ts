import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

import svg from '@poppanator/sveltekit-svg';
const svgOptions = {
	includePaths: ['./src/icons/', '$icons/'],
	svgoOptions: {
		plugins: [
			{
				name: 'preset-default',
				// by default svgo removes the viewBox which prevents svg icons from scaling
				// not a good idea! https://github.com/svg/svgo/pull/1461
				params: { overrides: { removeViewBox: false } },
			},
		],
	}
};

// https://github.com/zerodevx/svelte-img
import { imagetools } from '@zerodevx/svelte-img/vite'
const imagetoolOptions = {

}

const config: UserConfig = {
	plugins: [
		sveltekit(),
		imagetools(imagetoolOptions),
		svg(svgOptions),
	]
};

export default config;
