<footer style="background-color: {styles.divColor}; background-image: {styles.divBackgroundPicture}; border: {styles.borderSize} solid {styles.borderColor}; border-radius: {styles.borderRadius}; color: {styles.textColor};">
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

