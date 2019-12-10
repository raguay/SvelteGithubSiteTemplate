<div id='dropdown' style="height: {setHeight};" on:mouseover={divHoverAction} on:mouseout={divHoverAction} > 
  <a href='/#' style="color: {$info.styles.textColor};" on:mouseover={hoverAction} on:mouseout={hoverAction} on:click|preventDefault={(e) => {}}>{name}</a>
  <slot></slot>
</div>

<style>
  #dropdown {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  #dropdown a:first-child {
    margin-bottom: 10px;
    text-decoration: none;
  }
</style>

<script>
  import { onMount } from 'svelte';
  import { info } from '../store/infoStore.js';

  export let name = '';
  
  let savedInfo = {};
  let maxHeight = 0;
  let setHeight = "100%";
  let newSave = false;

  function divHoverAction(e) {
    switch(e.type) {
      case 'mouseover':
        setHeight = (maxHeight === 0)||newSave ? '100%' : maxHeight.toString() + 'px';
        break;
      case 'mouseout':
        if(maxHeight === 0) {
          maxHeight = e.target.parentNode.clientHeight;
        } else {
          if(newSave) maxHeight = 0;
        }
        setHeight = savedInfo.styles.navFontSize;
        break;
    }
  }

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


  onMount(() => {
    const unsubscribeInfo = info.subscribe((value) => {
      savedInfo = value;
      setHeight = value.styles.navFontSize;
      if(maxHeight !== 0) newSave = true;
    });
    return () => { unsubscribeInfo(); };
  });
</script>

