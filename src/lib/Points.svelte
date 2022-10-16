<script>
	import BlockHeader from '$lib/BlockHeader.svelte';
	import Buy from '$lib/Buy.svelte';
    import ImageWebp1 from '$static/1.jpg?fit=cover&format=webp&srcset';
    import ImageWebp2 from '$static/2.jpg?fit=cover&format=webp&srcset';
    import ImageWebp3 from '$static/3.jpg?fit=cover&format=webp&srcset';
    import ImageJpeg1 from '$static/1.jpg?fit=cover&format=jpg&srcset';
    import ImageJpeg2 from '$static/2.jpg?fit=cover&format=jpg&srcset';
    import ImageJpeg3 from '$static/3.jpg?fit=cover&format=jpg&srcset';
	const titles = { title: "Какие места ты посетишь",
    subtitle:"Авторские маршруты по Самарской области для твоего идеального лета",
    description:"Пути. Маршруты. Лайфхаки. Ценные советы. Пошаговое руководство по самым невероятным местам и секретным уголкам Самарской области" };
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher()
	function handleClick(index) {
		dispatch('openpoints',{initialSlide: index});
	}	    

</script>
<section class="pt-5 px-0 pb-3 w-full overflow-hidden">
	<BlockHeader  title={titles.title} subtitle={titles.subtitle} />
	<div class="grid grid-cols-1 sm:grid-cols-3" >
	  <div class="items-center justify-center">
	  	<a on:click|preventDefault={() => handleClick(0)}
	  		href="." rel="nofollow" class="zoomable"> 
          <picture>
            <source srcset="{ImageWebp1}" type="image/webp"> 
            <source srcset="{ImageJpeg1}" type="image/jpeg"> 
            <img src="1.jpg" alt="Волжские просторы" class="w-full mx-auto" loading="lazy"/>  
          </picture>            
		</a>
	  </div>
  	  <div class="items-center justify-center">
	  	<a on:click|preventDefault={() => handleClick(1)}
	  		href="." rel="nofollow" class="zoomable"> 
          <picture>
            <source srcset="{ImageWebp2}" type="image/webp"> 
            <source srcset="{ImageJpeg2}" type="image/jpeg"> 
            <img src="2.jpg" alt="Отдых в окружении гор" class="w-full mx-auto" loading="lazy"/>  
          </picture>            
		</a>
	  </div>
	  <div class="items-center justify-center">
	  	<a on:click|preventDefault={() => handleClick(2)}
	  		href="." rel="nofollow" class="zoomable"> 
          <picture>
            <source srcset="{ImageWebp3}" type="image/webp"> 
            <source srcset="{ImageJpeg3}" type="image/jpeg"> 
            <img src="3.jpg" alt="Острова" class="w-full mx-auto" loading="lazy"/>  
          </picture>            
	  	</a>
	  </div>
	</div>
	<div class="bg-gray-500 w-1/5 h-px my-5 mx-auto"></div>
    <div class="text-center text-2xl md:text-3xl w-2/3 mx-auto">
	    {titles.description}
    </div>
	<div class="bg-gray-500 w-1/5 h-px my-5 mx-auto"></div> 
	<Buy on:openbuy/>
</section>
<style>
.zoomable {
    cursor: zoom-in;
}
</style>