import Author from '$lib/Author.svelte';

export default {
  title: 'Section/Author',
  component: Author,
};

export const AuthorStory = (args) => ({
  Component: Author,
  props: args,
});