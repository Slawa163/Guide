<script>
  export let device = 'desktop';
  let srcsets;
  let wset;
  let jset;
  (async () => { 
    if ( device === "mobile") {
       srcsets = (await import('$lib/mobileHeader.js'));
    } else { 
       srcsets = (await import('$lib/desktopHeader.js'));
    }
    wset = srcsets.wset;
    jset = srcsets.jset;
  })();
  const titles = { title: "YOUR TRAVEL GUIDE",
    subtitle: "20 ПОТРЯСАЮЩИХ ПУТЕШЕСТВИЙ ПО САМАРСКОЙ ОБЛАСТИ",
    description: "детально спланированный путеводитель по самым невероятным местам в формате PDF (75 стр.)" };
</script>

<header class="flex relative overflow-hidden items-center justify-center">
  <div class="applause-gradient text-blueGray-50 top-0 left-0 h-full w-full absolute"></div> 
  <div class="w-full mx-auto">
    <picture>
      <source srcset="{wset}" type="image/webp"> 
      <source srcset="{jset}" type="image/jpeg"> 
      <img src="0.jpg" alt="Завораживающие пейзажи" loading="lazy"/>   
    </picture> 
  </div> 
  <div class="absolute h-3/4 w-4/5 text-white text-center items-center flex flex-col justify-between">
    <h1 class="text-2xl sm:text-7xl font-normal">
        {titles.title}
    </h1>
    <h2 class="text-xl sm:text-3xl font-normal">
        {titles.subtitle}
    </h2>
    <h3 class="text-lg sm:text-2xl font-light">
        {titles.description}
    </h3> 
  </div> 
</header> 


