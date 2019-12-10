<div id='twitter'>
  <slot />
</div>

<style>
  #twitter {
  }

  a {
    text-decoration: none;
  }
</style>

<script>
  import { onMount } from 'svelte';
  import { info } from '../store/infoStore.js';
  
  onMount(() => {
    //
    // Subscribe to the information store to get the site information.
    //
    const unsubscribeInfo = info.subscribe(async (value) => {
      if(typeof window.twttr !== 'undefined') await window.twttr.widgets.load();
  });

    return () => { unsubscribeInfo(); };
  });


</script>

