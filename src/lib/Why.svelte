<script>
	import BlockHeader from '$lib/BlockHeader.svelte';	
	import Card1 from '$lib/Card1.svelte';
  import Buy from '$lib/Buy.svelte';
	const titles = { title: "Почему тебе стоит купить этот путеводитель?"};
	const items = [
    { id : "1", 
      title : "✓",
      subtitle : "Ты <strong>сэкономишь</strong> десятки часов, проведенных в Google, - все поездки уже <strong>идеально спланированы</strong> за тебя!"},
    { id : "2", 
      title : "✓",
      subtitle : "Если ты предпочитаешь <strong>активный отдых</strong> на природе и не любишь сидеть на месте, ты проведешь время с удовольствием и откроешь много нового."},
    { id : "3", 
      title : "✓",
      subtitle : "Если ты не любишь многолюдные экскурсии и толпы людей, авторские маршруты из этого путеводителя помогут тебе <strong>самостоятельно открыть нестандартные пути</strong> и красивые места."},
    { id : "4", 
      title : "✓",
      subtitle : "Туризм в современных реалиях диктует слишком много условий? Путешествуй <strong>без ограничений!</strong>"},
    { id : "5", 
      title : "✓",
      subtitle : "Ты сделаешь сотни классных <strong>фотографий</strong> и получишь незабываемые <strong>впечатления.</strong>"},
    { id : "6", 
      title : "✓",
      subtitle : "Тебе не придется планировать <strong>отпуск и выходные</strong> в течение всего лета, или даже дольше! Открывай любой из маршрутов и смело отправляйся в путь!"}
      ]
</script>
<section class="w-full overflow-hidden">
  <BlockHeader  title={titles.title} subtitle={titles.subtitle} />
  <div class="grid grid-flow-row auto-rows-min grid-rows-6 grid-cols-1 md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-2 max-h-auto">
      {#each items as item , i (item.id)}
        <div class="symbol relative text-center flex items-center justify-center bg-gray-100">
	        <Card1 title={item.title} subtitle={item.subtitle} >
			     	<div class="flex justify-center items-center w-full">{item.id}</div>
			    </Card1>
		    </div>
	  {/each}  
  </div>
  <Buy on:openbuy />
</section>
<style>
.symbol {
    line-height: 150px;
    font-size: 200px;
    font-family: sans-serif;
    font-weight: 700;
    color: rgba(209, 213, 219, .7);
    opacity: .6;
}
</style>