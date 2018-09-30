
var expence, totalexpence, expences, i;
totalexpence = 0;
expences = [];
i = 0;

var askExpence = function() {
	expence = prompt('Scrivi quanto hai speso:');
	return expence;
}

var printTotal = function() {
	document.querySelector('.container').textContent = 'Hai acquistato i seguenti prodotti: ' + expences + '. Torna presto a spendere qui i tuoi soldi!';
}

var loopExpence = function() {
	askExpence();

	if (expence !== '*') {
		expences.push(expence);
		totalexpence = totalexpence + expence;
		i++;

		if(i < 3) {
			loopExpence();
		} else {
			printTotal();
		}	
	} else {
		printTotal();
	}
}
loopExpence();




