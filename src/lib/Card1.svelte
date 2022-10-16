<script>
//	export let id;
	export let title='';
	export let subtitle='';
</script>
<figure class="relative overflow-hidden w-full m-0 flex min-h-sm md:min-h-md xl:min-h-lg" >
	<slot/> 
	<figcaption class="absolute inset-0 text-justify text-black p-1 ">
	  <div class="mx-auto h-full w-7/8 flex flex-col justify-center" >
		<div class="text-left text-2xl font-bold uppercase h-1/5" >
		    <p>{@html title}<p>
		</div>
    	<div class="text-xl font-medium h-4/5">
			<p>{@html subtitle}</p>
		</div>
	  </div>
	</figcaption>
</figure>
<style>
</style>