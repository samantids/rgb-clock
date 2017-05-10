window.onload = function(){
	var rgbButton = document.getElementById("get-rgb"),
		rgbDiv = document.getElementById("rgb"),
		red = 1,
		green = 1,
		blue = 1, 
		redDescend = false,
		greenDescend = false,
		blueDescend = false,
		timer = setInterval(myTimer, 5000);

	function colorChanger(color, colorbool, increase, decrease){
		if (colorbool){
			color+=increase;
		} else {
			color-=decrease;
		}
		if (color >= 255 || color <= 0){
			colorbool = !colorbool;
		}
	}

	function myTimer() {
	    var date = new Date(),
	    	dateArr = date.toLocaleTimeString().split(":");
	    document.getElementById("clock").innerHTML = dateArr[0] + "<br>" + dateArr[1] + "<br>" + dateArr[2];

	    document.body.style.background = "rgb(" + red + "," + green + "," + blue + ")";

	    //colorChanger(red, redDescend, 2, 2);

	    if (redDescend){
	    	red-=2;
	    } else {
	    	red+=2;
	    }
	    if (red >= 255 || red <= 0){
	    	redDescend = !redDescend;
	    }

	    if (greenDescend){
	    	green-=5;
	    } else {
	    	green+=5;
	    }
	    if (green >= 255 || green <= 0){
	    	greenDescend = !greenDescend;
	    }

	    if (blueDescend){
	    	blue-=3;
	    } else {
	    	blue+=3;
	    }
	    if (blue >= 255 || blue <= 0){
	    	blueDescend = !blueDescend;
	    }
	}



	rgbButton.addEventListener("click", function(){
		rgbDiv.textContent = "RGB(" + red + "," + green + "," + blue + ")";
	})
};

