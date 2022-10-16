import Points from '$lib/Points.svelte';

export default {
  title: 'Section/Points',
  component: Points,
};

export const PointsStory = (args) => ({
  Component: Points,
  props: args,
});