/*
 *
 * Ethan Lusterman
 *      nav.js
 *      - toggles which div to display
 *      - adjusts corresponding navigation link style
 *
 */

// set css for when a nav item is clicked
var cssText = 'opacity:0.5;cursor:default;';

var dis = document.getElementById('social');
var navdis = document.getElementById('nav-social');

// set dis/navdis pair to "clicked" and display div
navdis.style.cssText = cssText;
dis.style.display = 'block';

// called each time a navigation link is clicked
function makeVisible(id) {
  var e = document.getElementById(id);

  if (e === dis)
    return;

  dis.style.display = 'none';
  navdis.style.cssText = 'cursor:pointer;';

  dis = e;

  navdis = document.getElementById('nav-'+id);
  dis.style.display = 'block';
  navdis.style.cssText = cssText;

  return;
}

function random() {
  var navs = document.getElementsByClassName('nav');

  var m = {
    software: 2,
    freelance: 4,
    music: 3,
    social: 1,
    research: 0
  }

  var next = navs[Math.floor(navs.length * Math.random())].id.slice(4);

  makeVisible(next);
  return;

}

random()
