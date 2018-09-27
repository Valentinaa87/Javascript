
//Creazione del nostro oggetto contenente le classi del nostro DOM
var domClasses = {
	mainBody: ".body",
	h1_Title: ".title_h1",
	h2_Title: ".title_h2",
	h3_Title: ".title_h3",
	textContainer: ".container"
}

var bodyFontSize, headingColor, textColor, bgColor, h1_title, h2_title, h3_title, defaultHeadingColor, defaultBgColor, defaultTextColor;

defaultHeadingColor = "#000";
defaultBgColor = "#eee";
defaultTextColor = "#666";

var askStyles = function() {

	bodyFontSize = 'Es: 14';
	headingColor = 'Es: #999';
	textColor = 'Es: #000';
	bgColor = 'Es: #f6f6f6';

	textColor = prompt('Insert a decimal color for the text', textColor);
	bgColor = prompt('Insert a decimal color for the background', bgColor);
	headingColor = prompt('Insert a decimal color for the headings', headingColor);
	bodyFontSize = parseInt(prompt('Insert la dimensione del test', bodyFontSize));

	h1_title = bodyFontSize + 3;
	h2_title = bodyFontSize + 2;
	h3_title = bodyFontSize + 1;

}

var styleElement = function(headColor, backgroundColor, txtColor) {
	document.querySelector(domClasses.mainBody).setAttribute('style', 'color: '+ txtColor +'; background: '+ backgroundColor+'; font-size:'+ bodyFontSize +'px; ');
	document.querySelector(domClasses.h1_Title).setAttribute('style', 'font-size:'+ h1_title +'px; font-weight: bold; color: '+ headColor +';');
	document.querySelector(domClasses.h2_Title).setAttribute('style', 'font-size:'+ h2_title +'px; color: '+ headColor +';');
	document.querySelector(domClasses.h3_Title).setAttribute('style', 'font-size:'+ h3_title +'px; font-weight: bold; font-style: italic; color: '+ headColor +';');
}

var ctrlFunction = function() {
	askStyles();

	if(textColor !== "*" || bgColor !== "*" || headingColor !== "*") {
		if(textColor == bgColor || textColor == headingColor || bgColor == textColor || bgColor == headingColor) {
			console.log('pippo');
			styleElement(defaultHeadingColor, defaultBgColor, defaultTextColor);

		} else {
			styleElement(headingColor, bgColor, textColor);
		}
	} else {

		// Creiamo il link ad un file css esterno tramte il 'createElement' che ci permette di crearlo pezzo per pezzo. 

		var externalCSS = document.createElement('link');
		externalCSS.rel = 'stylesheet';
		externalCSS.type = 'text/css';
		externalCSS.href = 'src/bulma.min.css';
		document.getElementsByTagName('head')[0].appendChild(externalCSS);
	}
}
ctrlFunction();



