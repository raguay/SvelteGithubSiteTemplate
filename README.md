# Svelte GitHub Website Template

This is a basic website built using [Svelte](https://svelte.dev/) to show the website
in [GitHub Pages](https://pages.github.com/). When visiting a page that isn't a
preprogramed svelte page, it pulls in the markdown file
for that page, runs it through a [Handlebars](https://handlebarsjs.com) processor, processes it into HTML 
using [Showdown](https://github.com/showdownjs/showdown), and puts it into the site. Therefore, you
compile your site once and just add new markdown files for the pages, posts, etc.

To get started, copy the template to your system using:

```sh
npx degit raguay/SvelteGithubSiteTemplate <name of your project directory>
cd <name of your project directory>
npm install
bower install
```

This template makes use of [Mask](https://github.com/jakedeichert/mask) to build the project. To run
the development environment, you type:

```sh
mask dev
```

To compile the site into the `launch` folder, you type:

```sh
mask build
```

Run the template in development mode and start making changes. The basics in there will
help you to know what to do.

To launch your new site, you have to have a GitHub pages account. Once that is setup, set the launch
directory as your repository for that account. To upload the site, you will simply run:

```sh
git commant -am "your message"
git push
```

Once GitHub pages has synce the changes, it will be live. Once you have the look and feel
for your website, you just add markdown pages and edit the markdown indexes to point to them.
You do not need to recompile each time you make a change. You just recompile whenever you change
one of the files in the `src` directory.

Have fun! If you create a site using this template, let me know and I'll add it to my list.

## Sites using Svelte GitHub Website Template

- [Custom Computer Tools](https://customct.com)


