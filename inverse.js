// http://stackoverflow.com/questions/4766201/javascript-invert-color-on-all-elements-of-a-page
if (!window.counter) {
	window.counter = 0;
}

if (window.counter % 2) {
	let element = document.getElementById("invert");
	element.parentNode.removeChild(element);
} else {
	let css =
    'html {' +
    '-webkit-filter: invert(100%);' +
		'-moz-filter: invert(100%);' +
		'-o-filter: invert(100%);' +
		'-ms-filter: invert(100%);' +
    '}',
	head = document.getElementsByTagName('head')[0],
	style = document.createElement('style');

	style.id = 'invert';
	style.appendChild(document.createTextNode(css));
	head.appendChild(style);
}
++window.counter;
