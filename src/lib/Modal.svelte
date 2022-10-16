<script>
    import { closeModal } from 'svelte-modals';
    import { fly } from 'svelte/transition'; 
</script>
 <div role="dialog" transition:fly="{{ y: 200, duration: 500 }}"
class="fixed inset-0 flex justify-center items-center overflow-auto opacity-100"> 
    <div class="w-97vw sm:w-95vw z-1 rounded bg-white p-4 flex flex-col justify-between items-center pointer-events-auto">
      <div class="absolute top-5 right-5 z-10 cursor-pointer"> 
        <a href="." on:click|preventDefault={closeModal}>
            <svg width="30" height="30" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.41421 -0.000151038L0 1.41406L21.2132 22.6273L22.6274 21.2131L1.41421 -0.000151038Z" fill="#007bff"></path><path d="M22.6291 1.41421L21.2148 0L0.00164068 21.2132L1.41585 22.6274L22.6291 1.41421Z" fill="#007bff">
                </path>
            </svg>
          </a>            
      </div>         
     <div class="w-full m-auto"> 
	        <slot /> 
 		</div> 
    </div>
</div>
<style>
/*  div.modal {
    position: fixed;
    top: 0;
    left: 0;  
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
  /*  allow click-through to backdrop 
    pointer-events: none; 
    opacity: 1; 
  }
/*  div.modal:not(:focus-within) {
    transition: opacity 0.1ms;
    opacity: 0.7;
  } 
  div.contents {
    z-index: 10;
    width: calc(100vw-60px);
    border-radius: 0.3rem;
    background-color: white;
    padding: 1rem;     
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    pointer-events: auto; 
  }
  div.actions {
    @apply absolute top-5 right-4 z-10 cursor-pointer;
  } */
</style>