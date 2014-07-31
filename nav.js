
var cssText = 'font-weight: bold; font-size: 120%;';
var a = document.getElementsByClassName('nav');
var c = document.getElementsByClassName('section');
a[0].style.cssText = cssText;
c[0].style.display = 'block';

function makeVisible(id) {
    var e = document.getElementById(id);
    for (var i=0; i<c.length; i++) {
        if (c[i] !== e) {
            c[i].style.display = 'none';
            a[i].style.cssText = '';
        } else {
            var x = i;
        }
    }
    e.style.display = 'block';
    a[x].style.cssText = cssText;
}
