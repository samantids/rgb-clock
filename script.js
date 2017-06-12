window.onload = function(){
	var menuButton = document.getElementById("menu-button"),
		menuDisplay = false,
		menu = document.getElementById("menu"),
		rgbButton = document.getElementById("get-rgb"),
		rgbDiv = document.getElementById("rgb"),
		clockHour = document.getElementById("clock-hour"),
		clockMinute = document.getElementById("clock-minute"),
		clockSecond = document.getElementById("clock-second"),
		redInputPlus = document.getElementById("red-input-plus"),
		redInputMinus = document.getElementById("red-input-minus"),
		greenInputPlus = document.getElementById("green-input-plus"),
		greenInputMinus = document.getElementById("green-input-minus"),
		blueInputPlus = document.getElementById("blue-input-plus"),
		blueInputMinus = document.getElementById("blue-input-minus"),
		redSlider = document.getElementById("red-slider"),
		greenSlider = document.getElementById("green-slider"),
		blueSlider = document.getElementById("blue-slider"),
		red = new Color (1, 2),
		green = new Color (2, 5),
		blue = new Color (1, 4),
		timer = setInterval(myTimer, 100);
	
	redSlider.value = red.increment;
	greenSlider.value = green.increment;
	blueSlider.value = blue.increment;	

	function Color(value, increment){
		this.value = value;
		this.descend = false;
		this.increment = increment;
		this.colorChanger = colorChanger;
		//this.inputIncrement = inputIncrement;
	}

	function colorChanger(){
		if (this.descend){
			this.value-=this.increment;
		} else {
			this.value+=this.increment;
		}
		if (this.value >= 255 || this.value <= 0){
			this.descend = !(this.descend);
		}
	}

	/*function inputIncrement(col){
		if(parseInt(col.value) != "" && parseInt(col.value) > 0){
			col.increment = parseInt(col.value);
		}
		console.log(parseInt(col.value));
	}*/

	function myTimer() {
	    var date = new Date(),
	    	dateArr = date.toLocaleTimeString().split(":");

	    clockHour.textContent = dateArr[0];
	    clockMinute.textContent = dateArr[1];
	    clockSecond.textContent = dateArr[2];
	    
	    document.body.style.background = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";

	    red.colorChanger();
	    green.colorChanger();
	    blue.colorChanger();
	}

	redInputPlus.addEventListener("click", function() {
		if(red.increment < 50) {
			red.increment+=1;
			redSlider.value = red.increment;
			console.log("red-plus clicked, red increment = " + red.increment);
		}
	});

	redInputMinus.addEventListener("click", function() {
		if(red.increment > 0) {
			red.increment-=1;
			redSlider.value = red.increment;
			console.log("red-minus clicked, red increment = " + red.increment);
		}
	});
	greenInputPlus.addEventListener("click", function() {
		if(green.increment < 50) {
			green.increment+=1;
			greenSlider.value = green.increment;
			console.log("green-plus clicked, green increment = " + green.increment);
		}
	});

	greenInputMinus.addEventListener("click", function() {
		if(green.increment > 0) {
			green.increment-=1;
			greenSlider.value = green.increment;
			console.log("green-minus clicked, green increment = " + green.increment);
		}
	});

	blueInputPlus.addEventListener("click", function() {
		if(blue.increment < 50) {
			blue.increment+=1;
			blueSlider.value = blue.increment;
			console.log("blue-plus clicked, blue increment = " + blue.increment);
		}
	});

	blueInputMinus.addEventListener("click", function() {
		if(blue.increment>0) {
			blue.increment-=1;
			blueSlider.value = blue.increment;
			console.log("blue-minus clicked, blue increment = " + blue.increment);
		}
	});

	redSlider.addEventListener("change", function() {
		console.log("red slider = " + redSlider.value + " red increment = " + red.increment);
		var redSliderValue = parseInt(redSlider.value);
		if(redSliderValue != "" && redSliderValue > 0){
			red.increment = redSliderValue;
		}
	});

	greenSlider.addEventListener("change", function() {
		console.log("green slider = " + greenSlider.value + " green increment = " + green.increment);
		var greenSliderValue = parseInt(greenSlider.value);
		if(greenSliderValue != "" && greenSliderValue > 0){
			green.increment = greenSliderValue;
		}
	});

	blueSlider.addEventListener("change", function() {
		console.log("blue slider = " + blueSlider.value + " blue increment = " + blue.increment);
		var blueSliderValue = parseInt(blueSlider.value);
		if(blueSliderValue != "" && blueSliderValue > 0){
			blue.increment = blueSliderValue;
		}
	});

	/*greenInput.addEventListener("input", function() {
		console.log("green input = " + greenInput.value + " green increment = " + green.increment);
		var greenInputValue = parseInt(greenInput.value);
		if(greenInputValue != "" && greenInputValue > 0){
			green.increment = greenInputValue;
		}
	});
	
	blueInput.addEventListener("input", function() {
		console.log("blue input = " + blueInput.value + " blue increment = " + blue.increment);
		var blueInputValue = parseInt(blueInput.value);
		if(blueInputValue != "" && blueInputValue > 0){
			blue.increment = blueInputValue;
		}
	}); */

	menuButton.addEventListener("click", function(){
		if(!menuDisplay){
			menu.style.display = "block";
			rgbDiv.style.display="none";
			menuDisplay = !menuDisplay;
		} else {
			menu.style.display = "none";
			menuDisplay = !menuDisplay;
		}
	});

	rgbButton.addEventListener("click", function(){
		rgbDiv.style.display = "inline";
		rgbDiv.textContent = "RGB(" + red.value + "," + green.value + "," + blue.value + ")";
	});

};

