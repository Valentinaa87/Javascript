
var expence, totalexpence, expences;
totalexpence = 0;
expences = [];

var askExpence = function() {
	expence = parseFloat(prompt('Scrivi quanto hai speso:'));
	return expence;
}

var loopExpence = function() {
	askExpence();
	
	if (expence !== 0) {
		expences.push(expence);
		console.log('expence: ' + expence);
		totalexpence = totalexpence + expence;
		loopExpence();

	} else {
		document.querySelector('.container').textContent = 'Hai acquistato i seguenti prodotti: ' + expences + '. Torna presto a spendere qui i tuoi soldi!';
	}
}
loopExpence();