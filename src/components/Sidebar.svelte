{#if styles.showSideBar && !styles.sideBarLeft}
<div id='sidebar' style="margin-right: 0px; margin-left: 10px; background-color: {styles.divColor}; background-image: {styles.divBackgroundPicture}; border: {styles.borderSize} solid {styles.borderColor}; border-radius: {styles.borderRadius}; color: {styles.textColor};"> 
  <Twitter>
    <p>Put the line you get from Twitter for your news here.</p>
  </Twitter>
  <BlogPosts />
</div>
{/if}

{#if styles.showSideBar && styles.sideBarLeft}
<div id='sidebar' style="margin-right: 10px; margin-left: 0px; background-color: {styles.divColor}; background-image: {styles.divBackgroundPicture}; border: {styles.borderSize} solid {styles.borderColor}; border-radius: {styles.borderRadius}; color: {styles.textColor};">
  <Twitter>
    <p>Put the line you get from Twitter for your news here.</p>
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
    info.subscribe((value) => {
      styles = value.styles;
    });
  });

</script>
