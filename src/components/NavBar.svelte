<div id='navbar' style="background-color: {styles.divColor}; background-image: {styles.divbackgroundPicture}; 
                        border: {styles.borderSize} solid {styles.borderColor}; border-radius: {styles.borderRadius}; 
                        color: {styles.textColor};
                        flex-direction: {navBarON ? 'row' : 'column'};" >
  <a class='navItem' href='/' use:link use:active>Home</a>
  <a class='navItem' href='/blog/index' use:link use:active>Blog</a>
  <a class='navItem' href='/about' use:link use:active>About</a>
</div>

<style>
  .navItem a {
    color: black;
    text-decoration-color: black;
  }

  #navbar {
    display: flex;
    flex-direction: row;
    width: 85%;
    margin: auto;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  #navbar a {
    text-decoration: none;
    font-size: 24px;
  }

  .navItem {
    margin-right: 26px;
    text-decoration: none;
  }
</style>

<script>
  import Router, { link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';
  import { onMount } from 'svelte';
  import { info } from '../store/infoStore.js';
  import { showNavbar } from '../store/showNavbar.js';

  let styles = {};
  let navBarON = true;

  onMount(() => {
    //
    // Subscribe to the information store to get the site information.
    //
    const unsubscribeInfo = info.subscribe((value) => {
      styles = value.styles;
    });

    const unsubscribeshowNavbar = showNavbar.subscribe((value) => {
      navBarON = value;
    })

    return () => { unsubscribeshowNavbar(); unsubscribeInfo(); };
  });

</script>

