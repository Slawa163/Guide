import BlockHeader from '$lib/BlockHeader.svelte';

export default {
  title: 'Controls/BlockHeader',
  component: BlockHeader,
  argTypes: {
    title: {
      defaultValue: 'Какие места ты посетишь',
      control: { type: 'text' }, 
    },
    subtitle: {
      defaultValue: 'Авторские маршруты по Самарской области для твоего идеального лета',
      control: { type: 'text' }, 
    },
  },
};

export const BlockHeaderStory = (args) => ({
  Component: BlockHeader,
  props: args,
});