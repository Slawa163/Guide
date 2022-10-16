<script>
	export let label='КУПИТЬ ПУТЕВОДИТЕЛЬ';
	import Button from '$lib/Button.svelte';	
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher()
	function handleClick() {
		dispatch('openbuy');
	}	
</script>
<div class="items-center justify-center mt-4 mb-2 py-2" >
	<div class="text-center animate-pulse">	
<!--        <a href="/about" rel="nofollow">  -->	
	    	<Button size = 'large' {label} on:click={handleClick} />
<!--	    </a>   -->
	</div>
</div>
<style>
</style>