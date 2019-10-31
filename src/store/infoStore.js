import { writable } from 'svelte/store';

export const info = writable({
  siteName: 'Your Site Name',
  byLine: 'The byline for your site',
  address: 'http://localhost:5000',
  GitHub: '',
  local: true
});
