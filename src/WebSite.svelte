<svelte:head>
  <title>{$info.siteName + $seo.addTitle}</title>
  <link rel='icon' type='image/png' href='/imgs/favicon.png'>
  <meta name="robots" content="{$seo.robot}">
  <meta name="description" content="{$seo.description}">
</svelte:head>

<svelte:window on:resize={winResize} bind:innerWidth={winWidth} />

<div id='page' style="background-color: {$info.styles.backgroundColor};
                      font: {$info.styles.font};">
  <header style="background-color: {$info.styles.divColor}; 
                 background-image: {$info.styles.headerBackgroundPicture}; 
                 border: {$info.styles.borderSize} solid {$info.styles.borderColor}; 
                 border-radius: {$info.styles.borderRadius};
                 color: {$info.styles.textColor}; 
                 font: {$info.styles.headerFont};">
    {#if showLogo }
      <Logo />
    {/if}
    <div id='title' style="width: {showLogo ? 'auto' : '100%'};">
      <h1>{$info.siteName}</h1>
      <h3>{$info.byLine}</h3>
    </div>
    <div id='spacer'>
    </div>
  </header>
  <NavBar />
  <div id='main' >
    {#if $info.styles.sideBarLeft && $showSidebar}
      <Sidebar />
    {/if}
    <Router {routes} />
    {#if !$info.styles.sideBarLeft && $showSidebar}
      <Sidebar />
    {/if}
  </div>
  <Footer />
</div>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
  }

  :global(a.active) {
    color: #155393 !important;
    text-decoration-color: #155393 !important;
  }

  header {
    display: flex;
    flex-direction: row;
    width: 85%;
    margin: auto;
    padding: 10px;
    flex-shrink: 0;
  }

  Router {
    margin: 0px;
    padding: 0px;
  }

  #spacer {
    width: 150px;
    padding: 0px;
    margin: 0px;
  }

  #title {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-content: center;
    flex-shrink: 0;
 }

  #logo {
    width: 100px;
    height: 100px;
  }

  #page {
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 15px;
  }

  #main {
    display: flex;
    flex-direction: row;
    width: 87%;
    align-content: center;
    margin: auto;
    padding: 0px;
 }
</style>

<script>
  import { onMount } from 'svelte';
  import About from './components/About.svexy';
  import Index from './components/Index.svexy';
  import Page from './components/Page.svelte';
  import Logo from './components/Logo.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import NavBar from './components/NavBar.svelte';
  import Footer from './components/Footer.svelte';
  import { info } from './store/infoStore.js';
  import { seo } from './store/SEOstore.js';
  import { showSidebar } from './store/showSidebar.js';
  import { showNavbar } from './store/showNavbar.js';
  import Router, { link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';

  const routes = {
    //
    // Exact path to the index and about pages. I want these
    // to be fast, so they are preloaded with everything else.
    //
    '/': Index,

    //
    // Catch-all
    // This is optional, but if present it must be the last
    //
    // If not caught otherwise, it must be a markdown file
    // on the file system. You can encapsulate the Page inside
    // your own for more customizations.
    //
    '*': Page
  }

  let winWidth = 0;
  let showLogo = false;
  let savedInfo = {};
  
  onMount(() => {
    //
    // Subscribe to the information store to get the site information.
    //
    const unsubscribeInfo = info.subscribe((value) => {
      savedInfo = value;
      document.body.style.backgroundColor = value.styles.backgroundColor;
      showLogo = value.styles.showlogo;
      winResize({});
    });

    const unsubscribeSEO = seo.subscribe((value) => {
    });

    return () => {
      unsubsribeInfo();
      unsubscribeSEO();
    };
  });

  function winResize(e) {
    //
    // Determine if we will show the sidebar or not.
    //
    if(savedInfo.styles.showSideBar && (winWidth > savedInfo.styles.widthSidebar)) {
      showSidebar.set(true);
    } else {
      showSidebar.set(false);
    }

    //
    // Determine to show the logo or not.
    //
    if((winWidth < savedInfo.styles.widthLogo)||(!savedInfo.styles.showlogo)) {
      showLogo = false;
    } else {
      showLogo = true;
    }

    //
    // Determine if we show the navigation bar or not.
    //
    if(winWidth < savedInfo.styles.widthNavbar) {
      showNavbar.set(false);
    } else {
      showNavbar.set(true);
    }
  }
</script>

