<script>
  export let section = 'Points';
  export let device = 'desktop';
  export let initialSlide = 0;
//  console.log(initialSlide);
//  import { onMount } from 'svelte';
//  import { browser } from '$app/env';
  let src = [ 1 , 2 , 3];
  if (section === 'Rest') {
    src = [ 8 , 9 , 10 , 0 ];
  };
  let visible = false;
  let srcsets = [];
  (async () => {
    if (section === 'Points') {
      srcsets =
      (device === 'mobile' && (await import('$lib/mobilePoints.js')).default) ||
      (device === 'desktop' && (await import('$lib/desktopPoints.js')).default);
    } else if (section === 'Rest') {
      srcsets =
      (device === 'mobile' && (await import('$lib/mobileRest.js')).default) ||
      (device === 'desktop' && (await import('$lib/desktopRest.js')).default);
    }; 
    visible = true;
  })();  
  // import Swiper core and required modules
  import SwiperCore, { Navigation, Pagination, 
   Zoom, EffectFade, Keyboard } from 'swiper';
  import Swiper from 'swiper/esm/svelte/swiper.svelte';
  import SwiperSlide from 'swiper/esm/svelte/swiper-slide.svelte';
  // Import Swiper styles
  import "swiper/swiper.min.css";
  import "swiper/components/navigation/navigation.min.css";
  import "swiper/components/pagination/pagination.min.css";
//  import "swiper/components/a11y/a11y.min.css";
  import "swiper/components/zoom/zoom.min.css";
  import "swiper/components/effect-fade/effect-fade.min.css";
  let swiper = null; 
  const onSwiper = (e) => {
      [swiper] = e.detail;
  }
  let zoommed = false;
  function onClick(e) {
   // console.log('zoommed change');
    if ( zoommed ) { 
      swiper.zoom.out();  
      zoommed = false;
    } else {
      swiper.zoom.in();
      zoommed = true; 
    };
  };
  function onSlideChange(e) {
   // console.log('slide change');
    if ( zoommed ) { 
      swiper.zoom.out(); 
      zoommed = false;
    }   
  };
  let m = { x: 0, y: 0 };
  function handleMousemove(event) {
      m.x = event.clientX-event.view.innerWidth/2;
      m.y = event.clientY-event.view.innerHeight/2;
  };
  $: s = zoommed ? `transform: matrix(2, 0, 0, 2, ${m.x}, ${m.y});` : 'transform: matrix(1, 0, 0, 1, 0, 0);'
</script>
<!-- <svelte:head>
	<title>Carousel</title>
</svelte:head> -->
<svelte:body on:mousemove={handleMousemove} /> 
{#if  visible }
  <Swiper 
    modules="{[ Navigation, Pagination, Zoom, EffectFade,  Keyboard ]}"    
    on:swiper={onSwiper}
    initialSlide={initialSlide}
    on:slideChange={onSlideChange}
    navigation={true} 
    pagination={{
      type: 'bullets',
      clickable: true ,
    }}
    keyboard={{
      enabled: true ,
      onlyInViewport: false,
      pageUpDown : true,
    }}
    autoHeight={false}
    loop={true}
    speed={300}
    grabCursor={true} 
    effect='fade'
    fadeEffect = {{ 
      crossFade: true,  
    }}  
    zoom={{ 
      maxRatio: 2,
      minRatio: 1,
      toggle: false,
    }}
  >
    {#each srcsets as { wset , jset } , i }
      <SwiperSlide>
        <div class="swiper-zoom-container mx-auto w-full h-full ">
          <picture>
            <source srcset="{wset}" type="image/webp"> 
            <source srcset="{jset}" type="image/jpeg"> 
            <img src="{src[i]}.jpg" alt="{src[i]}" style="{s}" class="w-full h-full" loading="lazy"/>
          </picture>            
          <!-- <img srcset={item} type="image/webp" alt="{i}" style="{s}" /> -->
        </div>  
      </SwiperSlide>          
    {/each}
  </Swiper>     
  <div class="absolute top-2.5 right-10 p-3 z-10 cursor-pointer">
    <div class="flex justify-end bg-opacity-100 text-blue-900">
      {#if zoommed}
        <svg width="30" height="30" viewBox="0 0 24 24" 
          fill="none" xmlns="http://www.w3.org/2000/svg"
          on:click={onClick} >
          <path d="M21.9961 22L17.0233 17.0273" stroke="#007bff" stroke-width="2" stroke-linecap="square"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.74997 3.7511C0.0818308 7.41924 0.0818308 13.367 3.74997 17.0352C7.41811 20.7033 13.3659 20.7033 17.0341 17.0352C20.7022 13.367 20.7022 7.41924 17.0341 3.7511C13.3659 0.0829653 7.41811 0.0829653 3.74997 3.7511Z" stroke="#007bff" stroke-width="2"></path>
          <path d="M5.41797 10.3931H15.3637" stroke="#007bff" stroke-width="2"></path>
        </svg>
      {:else}
        <svg width="30" height="30" viewBox="0 0 25 24" 
          fill="none" xmlns="http://www.w3.org/2000/svg"
          on:click={onClick}>
          <path d="M22.832 22L17.8592 17.0273" stroke="#007bff" stroke-width="2" stroke-linecap="square"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.58591 3.7511C0.917768 7.41924 0.917768 13.367 4.58591 17.0352C8.25405 20.7033 14.2019 20.7033 17.87 17.0352C21.5381 13.367 21.5381 7.41924 17.87 3.7511C14.2019 0.0829653 8.25405 0.0829653 4.58591 3.7511Z" stroke="#007bff" stroke-width="2"></path>
          <path d="M6.25781 10.3931H16.2035" stroke="#007bff" stroke-width="2"></path>
          <path d="M11.2305 15.3662V5.42053" stroke="#007bff" stroke-width="2"></path>
        </svg>
      {/if}
    </div>  
  </div>
{/if}