# Svelte GitHub Website

This is a basic website built using (Svelte)[https://svelte.dev/] to show the website
in (GitHub Pages)[https://pages.github.com/]. When visiting a page that isn't a
preprogramed svelte page, it pulls in the markdown file
for that page, runs it through a [Handlebars](https://handlebarsjs.com) processor, processes it into HTML 
using [Showdown](https://github.com/showdownjs/showdown), and puts it into the site. Therefore, you
compile your site once and just add new markdown files for the pages, posts, etc.


