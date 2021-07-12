/**
 * @author Bee Hudson
 * Each line in this file is an individual tool that can be used
 *   as a bookmark in chrome. Simply prepend the line with `javascript: `
 *   and paste it in the url section.
 * Each line is also *roughly* minified. Please don't hate me for my choices.
 */

/**
 * @summary Display Generator
 * @description For getting a quick glance at what CMS the site is using. Does
 * 		this by looking at the meta tags for ones with the name "generator",
 * 		and then reports the "content" attribute. Also has one special catch
 * 		for Squarespace
 */
a=(g)=>{alert("Generator: "+g);};document.querySelectorAll('meta').forEach((m)=>{if(m.name.search(/generator/i) != -1){ a(m.content); }});if(document.head.innerHTML.search(/<!-- This is Squarespace\. -->/) != -1){a('Squarespace');}

/**
 * @summary Parse Robots.txt
 * @description While on the site's robots.txt file, activating this will
 * 		create links to each of the line listed. The aims to hasten the task
 * 		of manually checking each line.
 */
 d=document;d.ce=d.createElement;pre=d.getElementsByTagName('pre')[0];c=d.ce('div');c.id="c";pre.insertAdjacentElement('afterend',c);ent=pre.textContent.split("\n");ent.forEach((e)=>{[n,p]=e.split(": ");if(p&&p[0]=="/"){a=d.ce('a');a.href=d.location.origin+p;a.innerText=p;a.target='_blank';c.appendChild(a);c.appendChild(d.ce('br'));}});

 /**
  * @summary Go to Robots
  * @description Just a shortcut to the robots.txt. Got tired of typing it in
  * 	for every site, so why not
  */
window.location.assign(location.origin+'/robots.txt');

/**
 * @summary Urchin Login
 * @description For testing Urchin web analytics logins. Simply go to the
 * 		login page and activate to test the default credentials.
 */
f=document.getElementsByName('login')[0];f.user.value='admin';f.pass.value='urchin';f.submit();