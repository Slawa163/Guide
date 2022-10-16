export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
import { addParameters } from '@storybook/svelte'; 
const newViewports = {
  smobile: {
    name: 'Small Mobile',
    styles: {
      width: '320px',
      height: '568px'
    }
  },
  lmobile: {
    name: 'Large Mobile',
    styles: {
      width: '414px',
      height: '896px'
    }
  },
  stablet: {
    name: 'Small Tablet',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  ltablet: {
    name: 'Large Tablet',
    styles: {
      width: '834px',
      height: '1112px'
    }
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1200px',
      height: '1024px'
    }
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1366px',
      height: '1024px'
    }
  },
  wide: {
    name: 'Wide',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  }
};
addParameters({ viewport: { viewports: newViewports, defaultViewport: 'smobile' } }); 


