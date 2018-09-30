// Creare array immagini
var imageArray, img, i;
imageArray = new Array('image_01', 'image_02', 'image_03');
img = document.getElementById('imageSlider');
i = 0;

var nextBtn = document.getElementById('imageNext');
var prevBtn = document.getElementById('imagePrev');

// Creare funzione onclick che cambia immagine andando avanti ed indietro nell'array



nextBtn.addEventListener('click', function() {
	if(i < imageArray.length - 1) {
		i++;
		img.src = 'images/' + imageArray[i] + '.jpg';
	} else {
		i = 0;
		img.src = 'images/' + imageArray[i] + '.jpg';		
	}
});

imagePrev.addEventListener('click', function() {
	if((i <= imageArray.length - 1) && (i > 0)){
		i--;
		img.src = 'images/' + imageArray[i] + '.jpg';
	} else {
		i = imageArray.length - 1;
		img.src = 'images/' + imageArray[i] + '.jpg';		
	}
});


