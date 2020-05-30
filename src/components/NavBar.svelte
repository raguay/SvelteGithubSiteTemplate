<div id='navbar' style="background-color: {$info.styles.divColor}; 
                        background-image: {$info.styles.divbackgroundPicture}; 
                        border: {$info.styles.borderSize} solid {$info.styles.borderColor}; 
                        border-radius: {$info.styles.borderRadius}; 
                        color: {$info.styles.textColor};
                        flex-direction: {$showNavbar ? 'row' : 'column'}; 
                        font-size: {$info.styles.navFontSize};" >
  <a href='/' style="color: {$info.styles.textColor};" on:mouseover={hoverAction} on:mouseout={hoverAction} use:link use:active>Home</a>
  <Dropdown name='Themes'>
    <a href='/#' style="color: {$info.styles.textColor};" on:mouseover={hoverAction} on:mouseout={hoverAction} on:click|preventDefault={(e) => {changeTheme('dark');}}>Dark</a>
    <a href='/#' style="color: {$info.styles.textColor};" on:mouseover={hoverAction} on:mouseout={hoverAction} on:click|preventDefault={(e) => {changeTheme('light');}}>Light</a>
    <a href='/#' style="color: {$info.styles.textColor};" on:mouseover={hoverAction} on:mouseout={hoverAction} on:click|preventDefault={(e) => {changeTheme('brown');}}>Brown</a>
 </Dropdown>
</div>

<style>
  #navbar {
    display: flex;
    width: 85%;
    margin: auto;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  #navbar a {
    text-decoration: none;
    margin: 0px 15px 0px 0px;
  }
</style>

<script>
  import Dropdown from './Dropdown.svelte';
  import Router, { link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';
  import { onMount } from 'svelte';
  import { info } from '../store/infoStore.js';
  import { showNavbar } from '../store/showNavbar.js';

  let savedInfo = {};

  onMount(() => {
    //
    // Subscribe to the information store to get the site information.
    //
    const unsubscribeInfo = info.subscribe((value) => {
      savedInfo = value;
    });

    const unsubscribeshowNavbar = showNavbar.subscribe((value) => {
    })
    
    //
    // Set the default theme.
    //
    changeTheme(savedInfo.styles.theme);

    return () => { unsubscribeshowNavbar(); unsubscribeInfo(); };
  });

  function hoverAction(e) {
    switch(e.type) {
      case 'mouseover':
        e.target.style.color = savedInfo.styles.navHoverColor;
        break;
      case 'mouseout':
        e.target.style.color = savedInfo.styles.textColor;
        break;
    }
  }

  function changeTheme(newTheme) {
    var newInfo = {...savedInfo};
    switch(newTheme) {
      case 'light':
        newInfo.styles.backgroundColor= '#F8F8F2',
        newInfo.styles.backgroundPicture= '',
        newInfo.styles.borderColor= '#F8F8F2',
        newInfo.styles.divColor= '#F8F8F2',
        newInfo.styles.divBackgroundPicture= '',
        newInfo.styles.borderSize= '5px',
        newInfo.styles.borderRadius= '10px',
        newInfo.styles.textColor= 'black',
        newInfo.styles.font= '20px Times New Romand, Arial',
        newInfo.styles.headerFont= '20px Verdana, Arial',
        newInfo.styles.navFontSize= '26px',
        newInfo.styles.navHoverColor = 'blue',
        newInfo.styles.showSideBar= false,
        newInfo.styles.sideBarLeft= false,
        newInfo.styles.widthLogo= 920,
        newInfo.styles.widthNavbar= 700,
        newInfo.styles.widthSidebar= 900
        break;

      case 'dark':
        newInfo.styles.backgroundColor= '#282B35',
        newInfo.styles.backgroundPicture= '',
        newInfo.styles.borderColor= '#282B35',
        newInfo.styles.divColor= '#282B35',
        newInfo.styles.divBackgroundPicture= '',
        newInfo.styles.borderSize= '5px',
        newInfo.styles.borderRadius= '10px',
        newInfo.styles.textColor= '#F8F8F2',
        newInfo.styles.font= '20px Times New Romand, Arial',
        newInfo.styles.headerFont= '20px Verdana, Arial',
        newInfo.styles.navFontSize= '24px',
        newInfo.styles.navHoverColor = 'blue',
        newInfo.styles.showSideBar= true,
        newInfo.styles.sideBarLeft= false,
        newInfo.styles.widthLogo= 920,
        newInfo.styles.widthNavbar= 700,
        newInfo.styles.widthSidebar= 900
        break;

      case 'brown':
        newInfo.styles.backgroundColor= '#D1BD79',
        newInfo.styles.backgroundPicture= '',
        newInfo.styles.borderColor= '#AA7942',
        newInfo.styles.divColor= '#ECDAAC',
        newInfo.styles.divBackgroundPicture= '',
        newInfo.styles.borderSize= '5px',
        newInfo.styles.borderRadius= '10px',
        newInfo.styles.textColor= 'black',
        newInfo.styles.font= '20px Times New Romand, Arial',
        newInfo.styles.headerFont= '20px Verdana, Arial',
        newInfo.styles.navFontSize= '24px',
        newInfo.styles.navHoverColor = 'blue',
        newInfo.styles.showSideBar= true,
        newInfo.styles.sideBarLeft= false,
        newInfo.styles.widthLogo= 920,
        newInfo.styles.widthNavbar= 700,
        newInfo.styles.widthSidebar= 900
        break;
    }
    info.set(newInfo);
  }
</script>

