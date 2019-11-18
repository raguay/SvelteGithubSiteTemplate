{#await promise}
  <content in:fade="{{duration: 500}}">
    <h2 id='waiting'>Loading page...</h2>
  </content>
{:then data}
  <content in:fade="{{duration: 500}}">
    {@html processData(data)}
  </content>
{:catch e}
  <content in:fade="{{duration: 500}}">
    {@html errorPage}
  </content>
{/await}


<style>
  content {
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

  #waiting {
    height: 100%;
    width: 100%;
    min-height: 200px;
    margin: auto;
  }

  .alert {
    background-color: red;
    color: black;
  }
</style>

<script>
  import { onMount } from 'svelte';
  import showdown from 'showdown';
  import {location, querystring} from 'svelte-spa-router';
  import { get } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import { info } from '../store/infoStore.js';
 
  export let params;

  let converter = null;
  let page = null;
  let promise = fetchPage(page);
  let errorPage = '';
  let parts = [];
  
  async function fetchPage(page) {
    if(page !== null) {
      const site = get(info);
      var address = '';
      if(site.local) {
        address = site.address;
      } else {
        address = site.GitHub;
      }
      const response = await fetch(address + '/site' + page + ".md");
      const text = await response.text();
      if(response.ok && (response.status === 200)) {
        if(((text[0] !== '-')&&(text[0] !== '+'))||(text[0] === '<')) {
          //
          // It's not a proper header. Treat as an error.
          //
          return errorPage
        } else {
          return text;
        }
      } else {
        return errorPage
      }
    } else {
      //
      // I have to return a promise, let's just load a page from 
      // anywhere.
      //
      const res = await fetch(`https://svelte.dev/tutorial/random-number`);
      const text = await res.text();

      if (res.ok) {
        return text;
      } else {
        throw new Error(text);
      }
    }
  }

  onMount(() => {
    showdown.setFlavor('github');
    showdown.setOption('simpleLineBreaks',false);

    converter = new showdown.Converter();

    //
    // Create the helpers functions for Handlebars.
    //
    window.Handlebars.registerHelper('save', function(name, text) {
      window.Handlebars.registerHelper(name, function() {
        return text;
      });
      return text;
    });

    window.Handlebars.registerHelper('date', function(dFormat) {
      return window.moment().format(dFormat);
    });

    window.Handlebars.registerHelper('cdate', function(cTime, dFormat, options) {
      if(options.data.root.indexOf(cTime) >= 0) {
        cTime = options.root[cTime];
      }
      return window.moment(cTime).format(dFormat);
    });

    window.Handlebars.registerHelper('last', function(weeks, dow, fmat) {
      return window.moment().add(-7 * weeks, 'd').day(dow).format(fmat);
    });

    window.Handlebars.registerHelper('next', function(weeks, dow, fmat) {
      return window.moment().add(7 * weeks, 'd').day(dow).format(fmat);
    });

    //
    // Setup the location store to update the page when the location changes.
    // This is done by setting a new promise in the promise variable for retrieving
    // the new page information.
    //
    location.subscribe(value => {
      promise = fetchPage(value);
      page = value;
    });

    //
    // Get the partial templates.
    //
    getPartials();
  });

  async function getPartials() {
    //
    // Get some error page.
    //
    const site = get(info);
    var address = '';
    if(site.local) {
      address = site.address;
    } else {
      address = site.GitHub;
    }
    var rep = await fetch(address + '/site/404.md');
    errorPage = await rep.text();

    //
    // Get the parts pages.
    //
    for(const page of site.parts) {
      var rep = await fetch(address + '/site/parts/' + page);
      var partial = await rep.text();
      window.Handlebars.registerPartial(page, partial);
    }
  }

  function processData(data) {
    var result = '';

    //
    // There are two types of front matter: delimited by three '-' and using a colon,
    // and delimited by three '+' and using an '='. This should catch both types.
    //
    // TODO: Maybe add json frontmatter processing?
    //
    let fmregexp = new RegExp(/(\-\-\-)|(\+\+\+)/);

    //
    // Remove the front matter and process it.
    //
    data = data.toString().split('\n');
    var fmatter = false;
    var fm = [];
    var body = [];

    //
    // Since we are able to turn on and off the frontmatter
    // processing, we need to make sure it's not changed more
    // than twice. If so, everything else is just body.
    //
    var count = 0;
    for(var i = 0; i < data.length; i++) {
      if(fmregexp.test(data[i])) {
        if(fmatter) i++;
        fmatter = !fmatter;
        count++;
      }
      if(fmatter && (count < 2)) {
        fm.push(data[i]);
      } else {
        body.push(data[i]);
      }
    }

    //
    // Create the data for Handlebars.
    //
    var hdata = [];
    hdata["cDateMDY"] = window.moment().format("MMMM DD, YYYY");
    hdata["cDateDMY"] = window.moment().format("DD MMMM YYYY");
    hdata["cDateDOWDMY"] = window.moment().format("dddd, DD MMMM YYYY");
    hdata["cDateDOWMDY"] = window.moment().format("dddd MMMM DD, YYYY");
    hdata["cDay"] = window.moment().format("DD");
    hdata["cMonth"] = window.moment().format("MMMM");
    hdata["cYear"] = window.moment().format("YYYY");
    hdata["cMonthShort"] = window.moment().format("MMM");
    hdata["cYearShort"] = window.moment().format("YY");
    hdata["cDOW"] = window.moment().format("dddd");
    hdata["cMDthYShort"] = window.moment().format("MMM Do YY");
    hdata["cMDthY"] = window.moment().format("MMMM Do YYYY");
    hdata["cHMSampm"] = window.moment().format("h:mm:ss a");
    hdata["cHMampm"] = window.moment().format("h:mm a");
    hdata["cHMS24"] = window.moment().format("H:mm:ss");
    hdata["cHM24"] = window.moment().format("H:mm");

    //
    // Add the front matter to the Handlebar's data.
    //
    for(var i = 1; i < fm.length;i++) {
      var parts = fm[i].split(' = ');
      if(parts.length < 2) parts = fm[i].split(': ');
      if(parts.length > 2) parts[1] = parts.slice(2);
      var item = unescape(parts[1]).trim();

      //
      // Sometimes, the front matter has quotes. Let's remove them
      // automatically so I don't need to change everything.
      //
      if(item[0] === '"') item = item.slice(1,-1);

      //
      // Set the frontmater into the data array for Handlebars
      // to use.
      //
      hdata[parts[0].trim()] = item;
    }

    //
    // Add the information from the info store.
    //
    const linfo = get(info);
    for(var key of Object.keys(linfo)) {
      hdata[key] = linfo[key];
    }

    //
    // Run the body through Handlebars.
    //
    var bodyTemplate = window.Handlebars.compile(body.join('\n'));
    var trying = true;
    var newBody = '';

    //
    // If the partials are called before loaded, running the template will throw
    // an error. Catch it and tell the user to move to another page and back.
    //
    try {
      newBody = bodyTemplate(hdata);
    } catch(e) {
      newBody = "<h1>Page not ready...</h1><p>Please don't reload this page. Go to another page and come back.</p>";
    }

    //
    // Convert the data given to HTML.
    //
    if(converter != null) {
      result = converter.makeHtml(newBody);
    }

    //
    // Return the results.
    //
    return result;
  }
</script>
