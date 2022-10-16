<script>
    import { page } from '$app/stores';
//	import { disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
	import { lock, unlock } from 'tua-body-scroll-lock'
	import Header from '$lib/Header.svelte';
	import Points from '$lib/Points.svelte';
	import Inside from '$lib/Inside.svelte';
	import Why    from '$lib/Why.svelte';
	import Rest   from '$lib/Rest.svelte';
	import Author from '$lib/Author.svelte';
	import How    from '$lib/How.svelte';
	import Footer from '$lib/Footer.svelte';
    import { Modals, closeModal, openModal, modals } from 'svelte-modals';
    import Modal from '$lib/Modal.svelte';
    import { fade } from 'svelte/transition'
  	import Fade from '$lib/Fade.svelte';
	import Form from '$lib/Form.svelte'; 
	import { MetaTags, JsonLd } from 'svelte-meta-tags';		    
//	import SEO from '$lib/SEO.svelte';
	import { browser } from '$app/env';
	import UAParser from "ua-parser-js";
	import { envvars } from '$lib/variables';
	const getDevice = device => {
	    if (!device.type) {
	      return "desktop";
	    }
	    return formatter(device.type);
	};
    const formatter = string =>
	    string
	      .toLowerCase()
	      .normalize("NFD")
	      .replace(/ /g, "")
	      .replace(/[^\w\s]/gi, "")
	      .replace(/[\u0300-\u036f]/g, "");
    const equals = (value, option) => {
	    if (Array.isArray(option)) {
	      return option.some(item => value === formatter(item));
	    }
	    return value === formatter(option);
	}; 
    const uaParser = new UAParser();
    let detectedDevice = uaParser.getDevice();
    let device = getDevice(detectedDevice); 
	function handlePoints(e) {	    	    
    	if ( equals(device, "mobile")) {
	  		openModal(Fade, { section: "Points", device: "mobile", initialSlide: e.detail.initialSlide})
	  	} else {
	  		openModal(Fade, { section: "Points",device: "desktop", initialSlide: e.detail.initialSlide})	
	  	}	
	};
	function handleRest(e) {
    	if ( equals(device, "mobile")) {
	  		openModal(Fade, { section: "Rest", device: "mobile", initialSlide: e.detail.initialSlide})	
	  	} else {
	  		openModal(Fade, { section: "Rest",device: "desktop", initialSlide: e.detail.initialSlide})	
	  	}	
	};
	function handleOpen() {
	    let os = uaParser.getOS();
	    let osname =  os.name;
		openModal(Form, { price: envvars.price, os: osname });
	};	   
	$: activeModal = $modals[$modals.length-1];
	let target;
	// multiple targetElements
	//const targetElements = [elementOne, elementTwo]
	let prevst=false;
	$:	st = ($modals.length !== 0);
	$:	if (browser && (st !== prevst)) {
		if (st) {
			//disableBodyScroll(target);
			lock(target);
			//lock(targetElements);
		} else {
		    //enableBodyScroll(target);
			unlock(target);
			//unlock(targetElements);
		};
		prevst = st;
	};
//	  function handlemouseWheel(e) {
//        e.preventDefault();
//    };
//    $:  if (browser) {
//    	document.body.classList.toggle('noscroll', $modals.length);
//    };
  var protocol = 'https://';
  var host = `${$page.host}`;
  if (host.substring(0,9) === 'localhost') 
      protocol = 'http://';

  const baseURL = `${protocol}${host}`;

  const paymentURL = `${baseURL}/payment`;

  const siteLogo = `${baseURL}/ag-logo.jpeg`;

  const siteImage = `${baseURL}/0.jpg`;

  const Title = 'Путеводитель для самостоятельных путешествий по Самарской области';

  const Description =
    'Сайт о путешествиях по Самарской области.Детально спланированный путеводитель по самым интересным, уникальным и неповторимым местам Самарской области в формате PDF (75 стр.)';
  const Currency = 'RUB';
  const metatags = {
    title : Title,
    description : Description,
    canonical : baseURL,
    openGraph : {
      type: 'website',
      url: baseURL,
      locale: 'ru_RU',
      title: Title,
      description: Description,
      images: [
        {
          url: siteImage,
	      width: 800,
          height: 600,
          alt: 'Завораживающие пейзажи Самарской области'
        }
      ],
      site_name: Title
    },
    twitter: {
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image'
    },
    facebook: {
      appId: '3116716808452210'
    }
  };
  const sitejsonld = {
    schema: {
      '@type': 'WebSite',
      url: baseURL,
      name: Title,
      alternateName: Title,
      description : Description,
      headline : Title,
      image: siteLogo
	}
  };
  const guidejsonld = {
    schema: {
	  '@type': 'Guide',
	  about: Title,
	  name: Title,
	  author: {
	      '@type': 'Person',
	      name: 'Анна Гузева',
	      email: 'guzeva.anna@mail.ru',
	      address: 'Тольятти, Россия'
	    },
	  offers: {
	      '@type': 'Offer',
	      url: paymentURL,
	      priceCurrency: Currency,
	      price: envvars.price
	  }
    }
  };
</script>
<MetaTags {...metatags} />
<JsonLd {...sitejsonld} />
<JsonLd {...guidejsonld} />
<!--  <SEO /> -->
<svelte:head>
   <title>Путеводитель для самостоятельных путешествий по Самарской области</title>
   <meta name="google-site-verification" content="tO_dYo0SyfcDu5clOJqOAHooVbFKzClk7I6vrK1CdOg" />
   <!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-12433LDZK4"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'G-12433LDZK4');
	</script>
</svelte:head>
<!-- <svelte:window bind:scrollX={x} bind:scrollY={y} /> -->
<main class="w-full" >
  <Header {device}/> 
  <Points on:openbuy={handleOpen} on:openpoints={handlePoints} />
  <Inside {device}/> 
  <Why on:openbuy={handleOpen} />
  <Rest on:openrest={handleRest}/>
  <Author />
  <How label='КУПИТЬ ПУТЕВОДИТЕЛЬ {envvars.price} ₽' on:openbuy={handleOpen} /> 
  <Footer />
</main>
<!-- <div on:mousewheel={handlemouseWheel} > -->
	<Modals bind:this={target} >
		<div slot="backdrop" class="fixed inset-0 bg-black bg-opacity-50"
		 on:click={closeModal} transition:fade="{{ duration: 500 }}" /> 
		{#if activeModal}
			<Modal>
			    <svelte:component this={activeModal.component} {...activeModal.props || {}} />
			</Modal>
		{/if}
	</Modals>  	
<!-- </div> -->
<style>
/*    :global(.noscroll) { position: fixed; overflow-y: scroll; }; */
/*    .backdrop {
	    position: fixed;
	    top: 0;
	    bottom: 0;
	    right: 0;
	    left: 0;
		background: rgba(0, 0, 0, 0.5); 
    }	*/
</style>

