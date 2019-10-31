<svelte:head>
  <title>{siteName}</title>
  <link rel='icon' type='image/png' href='/imgs/favicon.png'>
</svelte:head>

<div id='page'>
  <header>
    <Logo />
    <div id='title'>
      <h1>{siteName}</h1>
      <h3>{byLine}</h3>
    </div>
    <div id='spacer'>
    </div>
  </header>
  <div id='navbar'>
    <a class='navItem' href='/' use:link use:active>Home</a>
    <a class='navItem' href='/blog/index' use:link use:active>Blog</a>
    <a class='navItem' href='/about' use:link use:active>About</a>
  </div>
  <div id='main'>
    <Router {routes} />
    <Sidebar />
  </div>
  <footer>
    <div id='leftBox'>
      <p>Created using <a href='https://github.com/raguay/SvelteGithubSiteTemplate'>SvelteWeb</a></p>
      <p>Copyrighted by </p>
    </div>
  </footer>
</div>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    background-color: #D1BD79;
    margin: 15px;
    font-size: 20px;
  }

  :global(a.active) {
    color: #155393 !important;
    text-decoration-color: #155393;
  }

  .navItem a {
    color: black;
    text-decoration-color: black;
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

  #navbar {
    display: flex;
    flex-direction: row;
    width: 85%;
    background-color: #ECDAAC;
    color: black;
    margin: auto;
    border-radius: 10px;
    border: 5px solid #AA7942;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  #navbar a {
    color: black;
    text-decoration: none;
    font-size: 24px;
  }

  :global(.navItem) {
    margin-right: 26px;
    text-decoration: none;
  }

  #page {
    display: flex;
    flex-direction: column;
  }

  #main {
    display: flex;
    flex-direction: row;
    width: 87%;
    align-content: center;
    margin: auto;
    padding: 0px;
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

  footer {
    width: 85%;
    background-color: #ECDAAC;
    color: black;
    margin: auto;
    border-radius: 10px;
    border: 5px solid #AA7942;
    padding: 10px;
  }
</style>

<script>
  import { onMount } from 'svelte';
  import About from './components/About.svexy';
  import Index from './components/Index.svexy';
  import Page from './components/Page.svelte';
  import Logo from './components/Logo.svelte';
  import Sidebar from './components/Sidebar.svelte';
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
    // on the file system.
    //
    '*': Page
  }

  let siteName = '';
  let byLine = '';

  onMount(() => {
    info.subscribe((value) => {
      siteName = value.siteName;
      byLine = value.byLine;
    });
  });
</script>

