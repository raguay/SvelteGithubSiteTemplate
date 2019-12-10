import { writable } from 'svelte/store';

export const info = writable({
  siteName: 'Svelte Website Template',
  byLine: 'For creating a great website from GitHub Pages.',
  address: 'http://localhost:5000',
  GitHub: 'https://raw.githubusercontent.com/',
  parts: ['test.html'],
  local: true,
  styles: {
    backgroundColor: '#D1BD79',
    backgroundPicture: '',
    borderColor: '#AA7942',
    divColor: '#ECDAAC',
    divBackgroundPicture: '',
    borderSize: '5px',
    borderRadius: '10px',
    textColor: 'black',
    font: '20px Times New Romand, Arial',
    headerFont: '20px Verdana, Arial',
    navFontSize: '24px',
    navHoverColor: 'blue',
    showSideBar: true,
    sideBarLeft: false,
    widthLogo: 920,
    widthNavbar: 700,
    widthSidebar: 900
  }
});


