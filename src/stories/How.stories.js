import How from '$lib/How.svelte';

export default {
  title: 'Section/How',
  component:How,
};

export const HowStory = (args) => ({
  Component: How,
  props: args,
});