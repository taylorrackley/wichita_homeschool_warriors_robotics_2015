// Slide Show Taylor Rackley
// Check slide show for most coments

var imgMax = 5;
var imgMin = 1;
var imgNumber = imgMin;

// timer
var myTimer = 0;

//Holds ore names and point values
var oreNames = new Array("","Coal<br>Value : 5","Iron<br>Value : 7","Aluminum<br>Value : 10","Copper<br>Value : 15","Lithium<br>Value : 25");	

// Changes the image
function change_img(num){
	
	imgNumber += num;
	
	if(imgNumber > imgMax){
		imgNumber = imgMin;
	}
	else if(imgNumber < imgMin){
		imgNumber = imgMax;
	}

	document.ore_slider.src = "../img/ores/ores (" + imgNumber + ").png";
	document.getElementById('ore_info').innerHTML = oreNames[imgNumber];
	
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
		