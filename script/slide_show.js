// Slide Show Taylor Rackley

// Last image that is selectable.
var imgMax = 24;
// First image that is selectable.
var imgMin = 1;
// Current image selected.
var imgNumber = imgMin;

// timer
var myTimer = 0;
	
// Changes the image
function change_img(num){
	
	// Changes to next image.
	imgNumber += num;
	// If image is above the max change it to the first image.
	if(imgNumber > imgMax){
		imgNumber = imgMin;
	}
	// If image is below first image change to last image.
	else if(imgNumber < imgMin){
		imgNumber = imgMax;
	}
	// Sets picture source
	document.slider.src = "/img/media/img(" + imgNumber + ").png";
	
	return false;	
}

// Automaticly changes images
function auto(on){

	// if set to false reset timer (used when user clicks one of the arrows)
	if(on == false){
		clearInterval(myTimer);
		myTimer = setInterval("change_img(1)", 4000);
		
	}
	// Changes image after set number of seconds
	else {
		myTimer = setInterval("change_img(1)", 4000);
	}
}

auto(true);
		