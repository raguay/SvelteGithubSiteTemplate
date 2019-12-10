{#if $info.styles.showSideBar && !$info.styles.sideBarLeft}
<div id='sidebar' style="margin-right: 0px; 
                         margin-left: 10px; 
                         background-color: {$info.styles.divColor}; 
                         background-image: {$info.styles.divBackgroundPicture}; 
                         border: {$info.styles.borderSize} solid {$info.styles.borderColor}; 
                         border-radius: {$info.styles.borderRadius}; 
                         color: {$info.styles.textColor};"> 
  <Twitter>
    <p>Put the line you get from Twitter for your news here.</p>
  </Twitter>
  <BlogPosts />
</div>
{/if}

{#if $info.styles.showSideBar && $info.styles.sideBarLeft}
<div id='sidebar' style="margin-right: 10px; 
                        margin-left: 0px; 
                        background-color: {$info.styles.divColor}; 
                        background-image: {$info.styles.divBackgroundPicture}; 
                        border: {$info.styles.borderSize} solid {$info.styles.borderColor}; 
                        border-radius: {$info.styles.borderRadius}; 
                        color: {$info.styles.textColor};">
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

  onMount(() => {
    //
    // Subscribe to the information store to get the site information.
    //
    const unsubscribeInfo = info.subscribe((value) => {
    });

    return () => { unsubscribeInfo(); };
  });

</script>
