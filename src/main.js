var main = function() {
	var container = document.querySelector('#container');
	var shadowDomRoot = container.createShadowRoot();

	var template = document.querySelector('#myAwesomeComponent');

	shadowDomRoot.appendChild(document.importNode(template.content, true));
};

main();