// http://stackoverflow.com/questions/4766201/javascript-invert-color-on-all-elements-of-a-page
if(!window.counter) {
	window.counter = 0;
}

var css = window.counter % 2 ?
	'html {-webkit-filter: invert(0%);' +
	'-moz-filter: invert(0%);' +
	'-o-filter: invert(0%);' +
	'-ms-filter: invert(0%);}' :
	'html {-webkit-filter: invert(100%);' +
	'-moz-filter: invert(100%);' +
	'-o-filter: invert(100%);' +
	'-ms-filter: invert(100%);}';
++window.counter;

var head = document.getElementsByTagName('head')[0],
		style = document.createElement('style');

style.appendChild(document.createTextNode(css));
head.appendChild(style);
