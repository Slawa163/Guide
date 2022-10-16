<script>
	import BlockHeader from '$lib/BlockHeader.svelte';
    import ImageWebp1 from '$static/11.jpg?fit=cover&format=webp&srcset';
    import ImageJpeg1 from '$static/11.jpg?fit=cover&format=jpg&srcset';
	const titles = { title: "Анна Гузева",
    subtitle:"Автор путеводителя" };
    const items = [
	     'Дорогой друг! Если ты любишь самостоятельно планировать свои поездки, то смело открывай это руководство на любой странице.',
	     'Я собрала под одной обложкой десятки вдохновляющих маршрутов, по которым не раз путешествовала сама. Мы живем в удивительном месте, красоты которого должен увидеть каждый.',
	     'Встретить рассвет в палатке на берегу, устроить пикник на самой высокой точке Жигулевских гор, посетить дикие пляжи и скрытые от посторонних глаз пещеры, отправиться на острова или даже вернуться на десятки миллионов лет назад. Я покажу тебе множество разных способов увидеть самые невероятные места Самарской области и охотно поделюсь своими секретами.',
	     'Я собрала весь свой опыт, чтобы твое лето получилось насыщенным и незабываемым.',
	     'Вдохновляйся, выбирай свой собственный сценарий поездки и открывай новое! Удачи и удивительных приключений!' ];
</script>
<section class="pt-5 px-0 pb-3 w-full overflow-hidden ">
	<div class="mx-5 sm:mx-20 <sm:flex <sm:flex-col-reverse" >
    	<div class="sm:w-1/2 lg:w-1/3 xl:w-1/4 sm:float-right" >
            <picture>
                <source srcset="{ImageWebp1}" type="image/webp"> 
                <source srcset="{ImageJpeg1}" type="image/jpeg"> 
                <img src="11.jpg" alt="Автор" class="w-full  mx-auto" loading="lazy"/>  
            </picture>            
		</div>
		<div>
			<div>		
				<div class="font-normal text-5xl my-5">
					{titles.title}
				</div>
				<div class="text-xl font-serif my-5">
					{titles.subtitle}
				</div>
			</div>
			<div class="bg-gray-500 w-1/5 h-px my-0 "></div>
			{#each items as item , i }
			    <p class="text-lg md:text-xl font-light mx-auto">
				    {item}
			    </p>
			{/each} 
 	    <div>
	</div>
</section>
<style>
</style>