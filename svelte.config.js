import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess(), mdsvex(mdsvexConfig)],

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build'
      // fallback: null
    })
  },

  vitePlugin: {
    experimental: {
      inspector: {
        // change shortcut
        toggleKeyCombo: 'control',
        // hold and release key to toggle inspector mode
        holdMode: true,
        // show or hide the inspector option
        showToggleButton: 'always',
        // inspector position
        toggleButtonPos: 'top-right'
      }
    }
  }
};

export default config;
