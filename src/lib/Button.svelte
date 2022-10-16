<script>
  import { createEventDispatcher } from 'svelte';
  export let primary = false;
  export let backgroundColor = '';
  export let size = 'medium';
  export let label = '';

  let mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  let style = backgroundColor ? `background-color: ${backgroundColor}` : '';

  const dispatch = createEventDispatcher();
  function onClick(event) {
    dispatch('click', event);
  }
</script>

<button
  type="button"
  class="  bg-gradient-to-r from-green-400 to-blue-500 {['storybook-button', `storybook-button--${size}`, mode].join(' ') }
  {style} "
  on:click={onClick}>
  {label}
</button>

<style>
.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.storybook-button--medium {
  font-size: 13px;
  padding: 11px 20px;
}
.storybook-button--large {
  font-size: 14px;
  padding: 12px 24px;
}   
</style>