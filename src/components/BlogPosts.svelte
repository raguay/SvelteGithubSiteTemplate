<div id='blog' style="background-color: {styles.divColor}; background-image: {styles.divBackgroundPicture}; color: {styles.textColor};">
  <h4>Blog Links</h4>
  <a href='/#/blog/my-first-post'>My First Post</a>
</div>

<style>
  #blog {
    display: flex;
    flex-direction: column;
    align-items: left;
    align-content: left;
    margin: 10px 0px 10px 0px;
  }

  #blog h4 {
    margin: auto;
    padding: 5px 0px 10px 0px;
  }

  #blog a {
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
    const unsubscribeInfo = info.subscribe((value) => {
      styles = value.styles;
    });

    return () => { unsubscribeInfo(); };
  });

</script>

