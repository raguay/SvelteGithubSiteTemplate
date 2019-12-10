# Svelte GitHub Website Template

This is a basic website built using [Svelte](https://svelte.dev/) to show the website
in [GitHub Pages](https://pages.github.com/). When visiting a page that isn't a
preprogramed svelte page, it pulls in the markdown file
for that page, runs it through a [Handlebars](https://handlebarsjs.com) processor, processes it into HTML 
using [Showdown](https://github.com/showdownjs/showdown), and puts it into the site. Therefore, you
compile your site once and just add new markdown files for the pages, posts, etc.

The code can be used on any server that supports running flat file sites and not just GitHub pages. I wrote
it for GitHub pages because that is where my site is being hosted.

To get started, copy the template to your system using:

```sh
npx degit raguay/SvelteGithubSiteTemplate <name of your project directory>
cd <name of your project directory>
npm install
```

This template makes use of [Mask](https://github.com/jakedeichert/mask) to build the project. To run
the development environment, you type:

```sh
mask dev
```

or you can just use npm to start the development server: 

```sh
npm run dev
```

To compile the site into the `launch` folder, you type:

```sh
mask build 'your commit message'
```

The mask file, `maskfile.md`, has a lot more work that 
it does for the building process. You can examine this file 
to see what all it does. If you don't have Mask on your system, 
simply run each command found in the file under `## build` heading.

Run the template in development mode and start making changes. The basics in there will
help you to know what to do.

To launch your new site, you have to have a GitHub pages account. Once that is setup, set the launch
directory as your repository for that account. When you do a `mask build 'your commit message'`, it
will push your site to the GitHub pages.

Once GitHub pages has synce the changes, it will be live. Once you have the look and feel
for your website, you just add markdown pages and edit the markdown indexes to point to them.
You do not need to recompile each time you make a change. You just recompile whenever you change
one of the files in the `src` directory. But, the `mask build` command does recompile each time
just to make sure everything is in order. You can just add markdown files and do the git commit and push 
commands yourself on the command line.

I have a [tutorial](http://www.customct.com/#/tutorials/svelteweb/using-template) on using this template. Check it out.

Have fun! If you create a site using this template, let me know and I'll add it to my list.

## Sites using Svelte GitHub Website Template

- [Custom Computer Tools](https://customct.com)

## Changes made since initial release:

### 12/10/2019

- Added Theming menu option
- Added dropdown menus
- Fixed many bugs and removed redundant code.

### 12/06/2019

- Added responsiveness to the design.
- Fixed several bugs.

### 11/19/2019

- Fixed bug of not unsubscribing from stores that was causing a slowdown after changing
pages many times. Also, the error page is now a page in the site directory that is loaded. It
is correctly displayed on page errors.

### 11/18/2019

- Added partials, styles controled by the `info.styles` variable in the `info` Store, and various bug fixes.

