{#if styles.showSideBar && !styles.sideBarLeft}
<div id='sidebar' style="margin-right: 0px; margin-left: 10px; background-color: {styles.divColor}; background-image: {styles.divBackgroundPicture}; border: {styles.borderSize} solid {styles.borderColor}; border-radius: {styles.borderRadius}; color: {styles.textColor};"> 
  <Twitter>
   <a class="twitter-timeline" data-lang="en" data-width="300" data-height="400" data-theme="dark" href="https://twitter.com/CustomComputerT?ref_src=twsrc%5Etfw">Tweets by CustomComputerT</a> 
  </Twitter>
  <BlogPosts />
</div>
{/if}

{#if styles.showSideBar && styles.sideBarLeft}
<div id='sidebar' style="margin-right: 10px; margin-left: 0px; background-color: {styles.divColor}; background-image: {styles.divBackgroundPicture}; border: {styles.borderSize} solid {styles.borderColor}; border-radius: {styles.borderRadius}; color: {styles.textColor};">
  <Twitter>
    <a class="twitter-timeline" data-lang="en" data-width="300" data-height="400" data-theme="dark" href="https://twitter.com/CustomComputerT?ref_src=twsrc%5Etfw">Tweets by CustomComputerT</a> 
  </Twitter>
  <BlogPosts />
</div>
{/if}

<style>
  #sidebar {
    width: 30%;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>

<script>
  import Twitter from './Twitter.svelte';
  import BlogPosts from './BlogPosts.svelte';
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
