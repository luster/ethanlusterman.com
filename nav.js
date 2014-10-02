/*
 * Ethan Lusterman
 *      nav.js
 *      - toggles which div to display
 *      - adjusts corresponding navigation link style
 */

var cssText = 'font-weight:bold;font-size:120%;cursor:default;';
var dis = document.getElementById('social');
var navdis = document.getElementById('nav-social');
navdis.style.cssText = cssText;
dis.style.display = 'block';

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
