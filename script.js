window.onload = function(){
	var rgbButton = document.getElementById("get-rgb"),
		rgbDiv = document.getElementById("rgb"),
		/*red = 1,
		green = 1,
		blue = 1, 
		redDescend = false,
		greenDescend = false,
		blueDescend = false,*/
		red = new Color (1, 2, 2),
		green = new Color (2, 5, 5),
		blue = new Color (1, 4, 4),
		timer = setInterval(myTimer, 100);

	function Color(value, increase, decrease){
		this.value = value;
		this.descend = false;
		this.increase = increase;
		this.decrease = decrease;
	}

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

	    document.body.style.background = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";

	    //colorChanger(red, redDescend, 2, 2);

	    if (red.descend){
	    	red.value-=2;
	    } else {
	    	red.value+=2;
	    }
	    if (red.value >= 255 || red.value <= 0){
	    	red.descend = !(red.descend);
	    }

	    if (green.descend){
	    	green.value-=5;
	    } else {
	    	green.value+=5;
	    }
	    if (green.value >= 255 || green.value <= 0){
	    	green.descend = !(green.descend);
	    }

	    if (blue.descend){
	    	blue.value-=3;
	    } else {
	    	blue.value+=3;
	    }
	    if (blue.value >= 255 || blue.value <= 0){
	    	blue.descend = !(blue.descend);
	    }
	}



	rgbButton.addEventListener("click", function(){
		rgbDiv.textContent = "RGB(" + red.value + "," + green.value + "," + blue.value + ")";
	})
};

