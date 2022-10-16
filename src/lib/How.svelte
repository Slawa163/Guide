<script>
  export let label = 'КУПИТЬ ПУТЕВОДИТЕЛЬ';
	import BlockHeader from '$lib/BlockHeader.svelte';
  import Buy from '$lib/Buy.svelte';
	const titles = { title: "Как использовать путеводитель"};
	const items = [
    "Прочти содержание",
    "Выбери путешествие",
    "Изучи информацию о месте и советы",
    "Отправляйся в путь, используя пошаговый маршрут"
  ];
</script>
<section class="w-full overflow-hidden">
  <BlockHeader  title={titles.title} subtitle={titles.subtitle} />
  <div  class="mx-3 sm:(mx-15 flex justify-start) " >
    {#each items as item , i}
      <ol class="list-none" >
        <li class="list-none relative leading-4 pr-5 pb-5 md:w-48">
          {item}
         {#if i<3 }
            <div class="absolute bg-gray-500 h-full w-px mx-0 top-8 -left-7 sm:(w-full h-px m-0 p-0 -top-10 left-7) "></div> 
          {/if}                             
          <div class="absolute -left-12 -top-2 sm:(-left-3 -top-15)">
            <div class="relative p-5 rounded-full bg-gray-900 ">
              <div class="absolute text-white font-2xl font-bold top-2.5 left-4">
                  {i+1}
              </div> 
           </div> 
         </div>
        </li>
      </ol>
	  {/each}  
  </div>
  <Buy {label} on:openbuy/>
</section>
<style>
</style>