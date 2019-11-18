import { writable } from 'svelte/store';

export const info = writable({
  siteName: 'Svelte Based Website on GitHub',
  byLine: 'Great framework for making websites.',
  address: 'http://localhost:5000',
  GitHub: '',
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
    showSideBar: true,
    sideBarLeft: false
  }
});


