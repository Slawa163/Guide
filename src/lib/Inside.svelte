<script>
  export let device = 'desktop';
	import BlockHeader from '$lib/BlockHeader.svelte';	
	import Card from '$lib/Card.svelte'; 
  let srcsets = [];
  (async () => {
    srcsets =
    (device === 'mobile' && (await import('$lib/mobileInside.js')).default) ||
    (device === 'desktop' && (await import('$lib/desktopInside.js')).default);
  })();  
  const titles = { title: "Внутри"};  
  const items = [
      { title : "20 авторских маршрутов по интереснейшим местам Самарской области с описанием и всей необходимой информацией",
        subtitle : "Почему сюда стоит приехать: все о маршруте, интересные факты, фото крутых мест, где погулять и что посмотреть - все идеально спланировано, чтобы твоя поездка стала потрясающей!", alt : "Крутые берега"},
      { title : "Практическое руководство",
        subtitle : "Как добраться: точные координаты, подробная карта путешествия, пошаговое описание всех точек маршрута.", alt : "Нагорные сосняки"},
      { title : "Цифры",
        subtitle : "Точные расстояния, время в пути, бюджет поездки, рекомендуемая продолжительность путешествия для твоего комфортного планирования.", alt : "Протоки"},
      { title : "Полезные советы",
        subtitle : "Что взять с собой? Есть ли поблизости заправки и магазины? Можно ли доехать на общественном транспорте? В какое время лучше посетить? Какой нужен уровень физической подготовки? На что обратить внимание? Что интересного посмотреть по пути? Как подготовиться к поездке? Ответы на вопросы, секреты и лайфхаки.", alt : "Песчаная коса"},
    ];
</script>
<section class="w-full overflow-hidden">
  <BlockHeader  title={titles.title} subtitle={titles.subtitle} />
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-3">
    {#each srcsets as { wset , jset } , i ( i )}
      <Card  id={i} title={items[i].title} subtitle={items[i].subtitle.replace(/(\r\n|\n|\r)/gm, "")} >
        <picture>
          <source srcset="{wset}" type="image/webp"> 
          <source srcset="{jset}" type="image/jpeg">
          <img src="{i+4}.jpg" alt="{items[i].alt}" class="flex-1" loading="lazy" min-h-sm />
        </picture>            
  		</Card>
	  {/each}  
  </div>
</section>