<script>
	import logo from '$static/svelte-logo.svg'; 
    const titles = { title: "YOUR TRAVEL GUIDE",
    copyright: "© All rights reserved / Анна Гузева",
    description1: "Made on",
    description2: "SvelteKit" };
</script>
<footer>
	<div class="flex flex-col items-center justify-center bg-black h-50  mr-0 text-white">
		<p><a  href="/" class="text-white no-underline font-bold">
		   {titles.title}
		</a></p>
		<p>{titles.copyright}</p>
		<div class="flex flex-row mx-auto items-center justify-center">
			<span>{titles.description1}</span>
			<span class="w-1/8 h-full">
				<a href="https://kit.svelte.dev" class="h-full w-full">
					<img src={logo} alt="SvelteKit" class="h-full w-full ml-1" />
				</a>
			</span> 
			<span class="ml-2">{titles.description2}</span>
		</div>
	</div>
</footer>