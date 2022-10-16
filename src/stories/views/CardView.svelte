<script>
	/**
	* @component Card View
	* @wrapper
	*/
	import Card from '$lib/Card.svelte';
	import Image1 from '$static/4.jpg?fit=fill&width=200;400;700&height=200;400;700&format=webp;jpg&srcset';
	export let id='i1';
 	export let title = '20 авторских маршрутов по интереснейшим местам Самарской области с описанием и всей необходимой информацией';
	export let subtitle = 'Почему сюда стоит приехать: все о маршруте, интересные факты, фото крутых мест, где погулять и что посмотреть - все идеально спланировано, чтобы твоя поездка стала потрясающей!';
</script>
	<div> 
		<Card id={id} title={title} subtitle={subtitle} >
		  <img srcset="{Image1}" type="image/webp" alt="i1" class="flex-1" />
		</Card>
	</div>
<style>
	
</style>