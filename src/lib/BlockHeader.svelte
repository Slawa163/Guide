<script>
	export let title = '';
	export let subtitle = '';
</script>
	<div class="items-center justify-center" >
		<div  class="text-center">		
			<div class="font-bold text-4xl my-5">
				{title}
			</div>
			{#if subtitle}
				<div class="text-xl font-serif my-5">
					{subtitle}
				</div>
			{/if} 
			<div class="h-15">
			</div>
		</div>
	</div>
<style>
</style>