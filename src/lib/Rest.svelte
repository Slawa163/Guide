<script>
    import ImageWebp1 from '$static/8.jpg?format=webp&srcset';
    import ImageWebp2 from '$static/9.jpg?format=webp&srcset';
    import ImageWebp3 from '$static/10.jpg?format=webp&srcset';
    import ImageWebp4 from '$static/0.jpg?format=webp&srcset';
    import ImageJpeg1 from '$static/8.jpg?format=jpg&srcset';
    import ImageJpeg2 from '$static/9.jpg?format=jpg&srcset';
    import ImageJpeg3 from '$static/10.jpg?format=jpg&srcset';
    import ImageJpeg4 from '$static/0.jpg?format=jpg&srcset';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher()
	function handleClick(index) {
		dispatch('openrest',{initialSlide: index});
	}	    
</script>
<section class="pt-5 px-0 pb-3 w-full overflow-hidden">
	<div class="grid grid-cols-3 auto-rows-fr gap-2" >
	  <div class="items-center justify-center col-span-2 w-full h-full">
	  	<a on:click|preventDefault={() => handleClick(0)}
	  	 href="." rel="nofollow" class="zoomable w-full h-full"> 
          <picture>
            <source srcset="{ImageWebp1}" type="image/webp"> 
            <source srcset="{ImageJpeg1}" type="image/jpeg"> 
            <img src="8.jpg" alt="Волжские луга" class="w-full h-full" loading="lazy"/>  
          </picture>            
		</a>
	  </div>
  	  <div class="items-center justify-center w-full h-full">
	  	<a on:click|preventDefault={() => handleClick(1)}
	  	 href="." rel="nofollow" class="zoomable w-full h-full"> 
          <picture>
            <source srcset="{ImageWebp2}" type="image/webp"> 
            <source srcset="{ImageJpeg2}" type="image/jpeg"> 
            <img src="9.jpg" alt="Уединится с палаткой" class="w-full h-full" loading="lazy"/>  
          </picture>            
		</a>
	  </div>
	  <div class="items-center justify-center col-start-1 w-full h-full">
	  	<a on:click|preventDefault={() => handleClick(2)}
	  	 href="." rel="nofollow" class="zoomable w-full h-full"> 
          <picture>
            <source srcset="{ImageWebp3}" type="image/webp"> 
            <source srcset="{ImageJpeg3}" type="image/jpeg"> 
            <img src="10.jpg" alt="Лучшая рыбалка" class="w-full h-full" loading="lazy"/>  
          </picture>            
	  	</a>
	  </div>
	  <div class="items-center justify-center col-span-2 w-full h-full">
	  	<a on:click|preventDefault={() => handleClick(3)}
	  	 href="." rel="nofollow" class="zoomable w-full h-full"> 
          <picture>
            <source srcset="{ImageWebp4}" type="image/webp"> 
            <source srcset="{ImageJpeg4}" type="image/jpeg"> 
            <img src="0.jpg" alt="Завораживающие пейзажи" class="w-full h-full" loading="lazy"/>  
          </picture>            
	  	</a>
	  </div>
	</div>
</section>
<style>
.zoomable {
    cursor: zoom-in;
}
</style>