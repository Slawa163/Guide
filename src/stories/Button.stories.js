import Button from '$lib/Button.svelte';

export default {
  title: 'Controls/Button',
  component: Button,
  argTypes: {
    primary: {
      defaultValue: false,
      control: { type: 'boolean' },      
    },
    backgroundColor: {
      defaultValue: '#1ea7fd',
      control: { type: 'text' },  
    },
    size: {
      defaultValue: 'medium',
      control: {
        type: 'inline-radio',
        options: [ 'small','medium','large' ],
      }      
    },
    label: {
      defaultValue: 'КУПИТЬ ПУТЕВОДИТЕЛЬ',
      control: { type: 'text' },  
    } 
  } 
};

export const ButtonStory = (args) => ({
  Component: Button,
  props: args,
});