import Inside from '$lib/Inside.svelte';

export default {
  title: 'Section/Inside',
  component: Inside,
};

export const InsideStory = (args) => ({
  Component: Inside,
  props: args,
});