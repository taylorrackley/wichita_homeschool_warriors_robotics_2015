// Slide Show Taylor Rackley
// Check slide show for most coments

var imgSafetyMax = 2;
var imgSafetyMin = 1;
var imgSafetyNumber = imgSafetyMin;

// timer
var mySafetyTimer = 0;
	
// Changes the image
function changeSafetyImg(num1){
	
	imgSafetyNumber += num1;
	
	if(imgSafetyNumber > imgSafetyMax){
		imgSafetyNumber = imgSafetyMin;
	}
	else if(imgSafetyNumber < imgSafetyMin){
		imgSafetyNumber = imgSafetyMax;
	}

	document.safety_hazards_slider.src = "../img/safety_hazards/img (" + imgSafetyNumber + ").png";
	
	return false;	
}

// Automaticly changes images
function autoSafety(on){

	// if set to false reset timer (used when user clicks one of the arrows)
	if(on == false){
		clearInterval(mySafetyTimer);
		mySafetyTimer = setInterval("changeSafetyImg(1)", 4000);
		
	}
	// Changes image after set number of seconds
	else {
		mySafetyTimer = setInterval("changeSafetyImg(1)", 4000);
	}
}

autoSafety(true);
		