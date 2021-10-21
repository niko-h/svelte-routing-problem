import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		target: '#svelte',
		adapter: adapter({
			fallback: 'index.html',
			precompress: true,
			// prerender: {
			// 	pages: ['*', '1-A', '1-B', '1-C', '1-D', '2-A', '2-B', '2-C', '2-D']
			// },
		})
	}
};

export default config;
