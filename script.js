window.onload = function(){
	var rgbButton = document.getElementById("get-rgb"),
		rgbDiv = document.getElementById("rgb"),
		clockHour = document.getElementById("clock-hour"),
		clockMinute = document.getElementById("clock-minute"),
		clockSecond = document.getElementById("clock-second"),
		red = new Color (1, 2),
		green = new Color (2, 5),
		blue = new Color (1, 4),
		timer = setInterval(myTimer, 1000);

	var redInput = document.getElementById("red-input"),
		greenInput = document.getElementById("green-input"),
		blueInput = document.getElementById("blue-input");

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

	function inputIncrement(col){
		if(parseInt(col.value) != "" && parseInt(col.value) > 0){
			col.increment = parseInt(col.value);
		}
		console.log(parseInt(col.value));
	}

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

	redInput.addEventListener("input", function() {
		console.log("red input = " + redInput.value + " red increment = " + red.increment);
		var redInputValue = parseInt(redInput.value);
		if(redInputValue != "" && redInputValue > 0){
			red.increment = redInputValue;
		}
	});

	greenInput.addEventListener("input", function() {
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
	});

	rgbButton.addEventListener("click", function(){
		rgbDiv.textContent = "RGB(" + red.value + "," + green.value + "," + blue.value + ")";
	})
};

