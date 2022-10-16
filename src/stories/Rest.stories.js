import Rest from '$lib/Rest.svelte';

export default {
  title: 'Section/Rest',
  component: Rest,
};

export const RestStory = (args) => ({
  Component: Rest,
  props: args,
});