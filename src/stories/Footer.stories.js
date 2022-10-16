import Footer from '$lib/Footer.svelte';

export default {
  title: 'Section/Footer',
  component:Footer,
};

export const FooterStory = (args) => ({
  Component: Footer,
  props: args,
});