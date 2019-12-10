<footer style="background-color: {$info.styles.divColor}; 
               background-image: {$info.styles.divBackgroundPicture}; 
               border: {$info.styles.borderSize} solid {$info.styles.borderColor};
               border-radius: {$info.styles.borderRadius};
               color: {$info.styles.textColor};">
  <div id='leftBox'>
    <p>Created using <a href='https://github.com/raguay/SvelteGithubSiteTemplate'>SvelteWeb</a></p>
    <p>Copyrighted by Richard Guay</p>
  </div>
</footer>

<style>
  footer {
    width: 85%;
    margin: auto;
    padding: 10px;
  }

  #leftBox {
    float: left;
    display: flex;
    flex-direction: column;
  }

  #leftBox p {
    margin: 0px;
    padding: 0px;
  }

</style>

<script>
  import { onMount } from 'svelte';
  import { info } from '../store/infoStore.js';
 
  onMount(() => {
    //
    // Subscribe to the information store to get the site information.
    //
    const unsubscribeInfo = info.subscribe((value) => {
    });

    return () => { unsubscribeInfo(); };
  });
</script>

