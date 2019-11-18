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
 
  let styles = {};

  onMount(() => {
    //
    // Subscribe to the information store to get the site information.
    //
    info.subscribe((value) => {
      styles = value.styles;
    });
  });


</script>
