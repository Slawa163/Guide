module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "core": {
    "builder": "storybook-builder-vite"
  },
  "svelteOptions": {
//    "preprocess": require('../svelte.config.js').preprocess
  },
  async viteFinal(config, { configType }) {
	const { resolve } = await import('path');
	// customize the Vite config here
	config.resolve.alias = {
  $lib: resolve('src/lib'),
  $static: resolve('/static'),
  $app: resolve('node_modules/@sveltejs/kit/assets/runtime/app')
	};
  config.resolve.server = { 
       fs: {
           allow: ['..']
         }
  };
  config.plugins.push(require('vite-imagetools').imagetools({force: true}));  
  // return the customized config
	return config;
  }
}
