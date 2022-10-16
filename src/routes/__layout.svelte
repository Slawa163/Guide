<script>
    import "../app.css";
    import favicon from '$static/favicon.png';
</script>
<svelte:head>
	<link rel='icon' type='image/png' href={favicon}>
</svelte:head>
<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		padding: 0rem;
		width: 100%;
		max-width: 100%;
		margin: 0;
		box-sizing: border-box;
	}
</style>
