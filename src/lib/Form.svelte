<script>
	export let price;
	export let os = "iOS";
	console.log(os);
    import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
    let formData = {
        name : '',
        email: '',
        phone: ''
    };
    function enableZoom() {
		let viewport = document.querySelector("meta[name=viewport]");
	    viewport.setAttribute("content","width=device-width, initial-scale=1");
	};
    function disableZoom() {
		let viewport = document.querySelector("meta[name=viewport]");
	    viewport.setAttribute("content","width=device-width, initial-scale=1, maximum-scale=1");		
	};
//    onMount(() => { if ( os === "iOS" )	{ disableZoom() }});
//	onDestroy(() => { if ( os === "iOS" ) { enableZoom() }});    	    
    async function handleSubmit(e) {
        const res = await fetch('/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
	    });
        const result = await res.text();
	    if (res.ok && (result === 'SUCCESS')) {
	    	if ( os === "iOS" ) { enableZoom() };
		 	let now = Date.now();
		 	let newDate = new Date(now);
		 	let Datestr = `${newDate.toDateString()} ${newDate.toTimeString()}`;
		 	let url = `https://www.payanyway.ru/assistant.htm?MNT_ID=37808884&MNT_AMOUNT=${price}&MNT_CURRENCY_CODE=RUB&MNT_TEST_MODE=0&MNT_TRANSACTION_ID=${Datestr}&MNT_DESCRIPTION=Путеводитель&MNT_SUBSCRIBER_ID=${formData.email}`
		  	goto(url);
	    } else {
		  alert("Ошибка. " + res.status +" "+ result);
		};
	};
</script>
<form on:submit|preventDefault={handleSubmit}
  action="https://www.moneta.ru/assistant.htm"
  method="post" class="flex flex-col items-center justify-center" >
	<h2 class="my-2 mx-auto"> Оплата </h2>
	<div class="bg-gray-500 w-full h-px mt-4 mb-3 mx-auto"></div> 
	<p> <strong>Путеводитель</strong>    :  {price} р.</p>
	<div class="bg-gray-500 w-full h-px mt-3 mb-4 mx-auto"></div> 
	<div>
	    <div class="form-group">
	        <label for="name">Ваше имя</label>
	        <input class="form-control" 
	            name='name' 
	            placeholder="Введите имя" 
	            type="text"
	            bind:value={formData.name}
	        >
	    </div>
	    <div class="form-group">
	        <label for="email">Email</label>
	        <input class="form-control" 
	            name='email'
	            placeholder="Введите Email адрес"
	            type="email"
	            bind:value={formData.email}
	            required 
	        >
	    </div>
	    <div class="form-group">
	        <label for="phone">Телефон</label>
	        <input class="form-control" 
	            name='phone'
	            placeholder="Введите телефон"
	            type="text"
	            bind:value={formData.phone}	                 
	        >	        
	    </div>
	</div>
    <button class="bg-black text-white cursor-pointer my-4" type="submit"> Купить </button> 
    <p> YOUR TRAVEL GUIDE </p>
    <p class="text-red-600 text-xs sm:text-sm"> Время доставки может занять до 5 мин. Если путеводитель не пришёл на почту вовремя, пожалуйста, проверьте папку СПАМ.</p>
</form>
<style>
    label {
    	@apply font-bold;
    }
    input {
	    @apply w-full h-5 text-base; 
    }
</style>