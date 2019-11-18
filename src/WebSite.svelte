<svelte:head>
  <title>{siteName}</title>
  <link rel='icon' type='image/png' href='/imgs/favicon.png'>
</svelte:head>

<div id='page' style="background-color: {styles.backgroundColor}; font: {styles.font};">
  <header style="background-color: {styles.divBackgroundColor}; background-image: {styles.headerBackgroundPicture}; 
  border: {styles.borderSize} solid {styles.borderColor}; border-radius: {styles.borderRadius};
  color: {styles.textColor}; font: {styles.headerFont};">
    <Logo />
    <div id='title'>
      <h1>{siteName}</h1>
      <h3>{byLine}</h3>
    </div>
    <div id='spacer'>
    </div>
  </header>
  <NavBar />
  <div id='main' >
    {#if styles.showSideBar && styles.sideBarLeft}
      <Sidebar />
    {/if}
    <Router {routes} />
    {#if styles.showSideBar && !styles.sideBarLeft}
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
    text-decoration-color: #155393;
  }

  header {
    display: flex;
    flex-direction: row;
    width: 85%;
    background-color: #ECDAAC;
    color: black;
    margin: auto;
    border-radius: 10px;
    border: 5px solid #AA7942;
    padding: 10px;
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
    width: 100%;
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
  import Router, { link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';

  const routes = {
    //
    // Exact path to the index and about pages. I want these
    // to be fast, so they are preloaded with everything else.
    //
    '/': Index,

    '/about': About,

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

  let siteName = '';
  let byLine = '';
  let styles = {};

  onMount(() => {
    //
    // Subscribe to the information store to get the site information.
    //
    info.subscribe((value) => {
      siteName = value.siteName;
      byLine = value.byLine;
      styles = value.styles;

      document.body.style.backgroundColor = styles.backgroundColor;
    });
  });
</script>

