import { writable } from 'svelte/store';

export const seo = writable({
  addTitle: '',
  description: '',
  robot: 'index, follow'
});


