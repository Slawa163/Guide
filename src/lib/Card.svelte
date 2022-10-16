<script>
	export let id;
	export let title;
	export let subtitle='';
	let hov = false;
	let up1 = false;
	let up2 = false;
$:  up1 = hov && (  id === 0 || id === 1 || id === 2) ; 
$:  up2 = hov && (  id === 3  ) ; 
</script>
<figure on:mouseover={() => {hov=true}} on:focus={() => {hov=true}}
    on:mouseout={() => {hov=false}} on:blur={() => {hov=false}}
	class="relative overflow-hidden w-full m-0 flex max-h-lg min-h-sm">
	<slot/> 
	<figcaption class="absolute inset-0 text-justify text-white p-1 hover:bg-gray-800 hover:bg-opacity-50">
	  <div class="mx-auto h-full w-7/8 flex flex-col justify-center transform transition-transform duration-400 translate-y-1/2" class:tup1={up1} class:tup2={up2} >
		<div class="text-left text-md font-bold uppercase h-1/2 flex flex-col-reverse" >
			<div>
			    <p> {@html title} </p>
			    <div class="bg-white h-2px w-full mt-1 mx-auto"></div>
		    </div>
		</div>
    	<div class="text-md font-light h-1/2">
			<p>{@html subtitle}</p>
		</div>
	  </div>
	</figcaption>
</figure>
<style>
	.tup1 {
		@apply -translate-y-0 !important;
	}
	.tup2 {
		@apply -translate-y-1/3 !important;
	}
</style>