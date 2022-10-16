import { windi } from "svelte-windicss-preprocess";
import { imagetools } from 'vite-imagetools';
import path from 'path'; 
 import adapter from '@sveltejs/adapter-netlify';
/** @type {import('@sveltejs/kit').Config} */
const config = {
//  preprocess: preprocess(),
  preprocess: [
     windi({}),
  ],
  kit: {
    adapter: adapter(),
    target: '#svelte',
    files: {
      assets: '/static',
    },
    vite: {
//      define: {
//        'process.env': process.env,
//      },
//      server: {
//         fs: {
           // Allow serving files from one level up to the project root
//           allow: ['..']
//         }
//      },
//      ssr: {
//        noExternal: ['svelte-device-detector']
//      },
      optimizeDeps: {
        exclude: ['svelte-modals'],
        include: ['blueimp-md5','cookie']
      },
      resolve: {
        alias: {
          $static: path.resolve('/static')
        }
      },
      plugins: [imagetools({force: true})]
    },
//    vite: {
//      optimizeDeps: {
//        include: ["siema"] 
//      }
//    }

//    vite: () => ({
//      plugins: [
//        WindiCSS.default(),
//      ],
//    }),
  },
};
export default config;
