window.onload = function(){
	var menuButton = document.getElementById("menu-button"),
		menuDisplay = false,
		menu = document.getElementById("menu"),
		rgbButton = document.getElementById("get-rgb"),
		rgbDiv = document.getElementById("rgb"),
		copyRGB = document.getElementById("copy-rgb-value"),
		copySuccess = document.getElementById("copy-success"),
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
		redMobile = document.getElementById("red-mobile"),
		greenMobile = document.getElementById("green-mobile"),
		blueMobile = document.getElementById("blue-mobile"),
		slow = document.getElementById("slow"),
		medium = document.getElementById("medium"),
		fast = document.getElementById("fast"),
		reset= document.getElementById("reset"),
		isMobile = window.matchMedia("only screen and (min-device-width : 320px) and (max-device-width : 480px)"),
		TIME = 100;
		RED_VAL = 1;
		RED_INC = 2;
		GREEN_VAL = 2;
		GREEN_INC = 5;
		BLUE_VAL = 1;
		BLUE_INC = 4;
		MIN_INC = 0;
		MAX_INC = 30;
		red = new Color (RED_VAL, RED_INC),
		green = new Color (GREEN_VAL, GREEN_INC),
		blue = new Color (BLUE_VAL, BLUE_INC),
		timer = setInterval(myTimer, TIME);
	
	redSlider.value = red.increment;
	greenSlider.value = green.increment;
	blueSlider.value = blue.increment;	
	redMobile.textContent = red.increment;
	greenMobile.textContent = green.increment;
	blueMobile.textContent = blue.increment;

	//color constructor
	function Color(value, increment){
		this.value = value;
		this.descend = false;
		this.increment = increment;
		this.colorChanger = colorChanger;
	}

	//color change function
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

	//clock + calls color change function
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

	//red plus incrementer 
	redInputPlus.addEventListener("click", function() {
		if(red.increment < MAX_INC) {
			red.increment+=1;
			redSlider.value = red.increment;
			redMobile.textContent = red.increment;
			console.log("red-plus clicked, red increment = " + red.increment);
		}
	});

	//red minus incrementer
	redInputMinus.addEventListener("click", function() {
		if(red.increment > MIN_INC) {
			red.increment-=1;
			redSlider.value = red.increment;
			redMobile.textContent = red.increment;
			console.log("red-minus clicked, red increment = " + red.increment);
		}
	});

	//green plus incrementer
	greenInputPlus.addEventListener("click", function() {
		if(green.increment < MAX_INC) {
			green.increment+=1;
			greenSlider.value = green.increment;
			greenMobile.textContent = green.increment;
			console.log("green-plus clicked, green increment = " + green.increment);
		}
	});

	//green minus incrementer
	greenInputMinus.addEventListener("click", function() {
		if(green.increment > MIN_INC) {
			green.increment-=1;
			greenSlider.value = green.increment;
			greenMobile.textContent = green.increment;
			console.log("green-minus clicked, green increment = " + green.increment);
		}
	});

	//blue plus incrementer
	blueInputPlus.addEventListener("click", function() {
		if(blue.increment < MAX_INC) {
			blue.increment+=1;
			blueSlider.value = blue.increment;
			blueMobile.textContent = blue.increment;
			console.log("blue-plus clicked, blue increment = " + blue.increment);
		}
	});

	//blue minus incrementer
	blueInputMinus.addEventListener("click", function() {
		if(blue.increment>MIN_INC) {
			blue.increment-=1;
			blueSlider.value = blue.increment;
			blueMobile.textContent = blue.increment;
			console.log("blue-minus clicked, blue increment = " + blue.increment);
		}
	});

	//red slider - desktop only
	redSlider.addEventListener("change", function() {
		console.log("red slider = " + redSlider.value + " red increment = " + red.increment);
		var redSliderValue = parseInt(redSlider.value);
		if(redSliderValue != "" && redSliderValue > 0){
			red.increment = redSliderValue;
		}
	});

	//green slider - desktop only
	greenSlider.addEventListener("change", function() {
		console.log("green slider = " + greenSlider.value + " green increment = " + green.increment);
		var greenSliderValue = parseInt(greenSlider.value);
		if(greenSliderValue != "" && greenSliderValue > 0){
			green.increment = greenSliderValue;
		}
	});

	//blue slider - desktop only
	blueSlider.addEventListener("change", function() {
		console.log("blue slider = " + blueSlider.value + " blue increment = " + blue.increment);
		var blueSliderValue = parseInt(blueSlider.value);
		if(blueSliderValue != "" && blueSliderValue > 0){
			blue.increment = blueSliderValue;
		}
	});

	//menu button
	menuButton.addEventListener("click", function(){
		if(!menuDisplay){
			menu.style.display = "block";
			rgbDiv.style.display= "none";
			menuDisplay = !menuDisplay;
		} else {
			menu.style.display = "none";
			menuDisplay = !menuDisplay;
		}
	});

	//grab rgb
	rgbButton.addEventListener("click", function(){
		rgbDiv.style.display = "inline";
		copyRGB.value = "RGB(" + red.value + "," + green.value + "," + blue.value + ")";
		console.log(copyRGB + " rgb value is " + copyRGB.value);
	});

	//copy rgb button
	rgbDiv.addEventListener("click", function(){
		copyRGB.select();
		document.execCommand("copy");
		copySuccess.style.visibility = "visible";
		if(isMobile.matches){
			rgbDiv.style["background-color"] = "rgba" + copyRGB.value.slice(3, -1) + ",.8)";
			console.log("mobile color change " + "rgba" + copyRGB.value.slice(3, -1) + ",.8)");
		} else {
			copyRGB.style["border-style"] = "none none solid none";
			copyRGB.style["border-width"] = "5px";
			copyRGB.style["border-color"] = "rgba" + copyRGB.value.slice(3, -1) + ",.8)";
		};
		setTimeout(function(){
			copySuccess.style.visibility = "hidden";
			if(isMobile.matches){
				rgbDiv.style["background-color"] = "rgba(255, 255, 255, .8)";
			} else {
				copyRGB.style.border = "none";
			};
		}, 2000);
		console.log("rgb copied + rgba is " + "rgba" + copyRGB.value.slice(3, -1) + ",.8)");

	})

	//slow button
	slow.addEventListener("click", function(){
		clearInterval(timer);
		TIME = 1000;
		timer = setInterval(myTimer, TIME);
		slow.classList.add("selected-button");
		medium.classList.remove("selected-button");
		fast.classList.remove("selected-button");
	});

	//medium button
	medium.addEventListener("click", function(){
		clearInterval(timer);
		TIME = 100;
		timer = setInterval(myTimer, TIME);
		slow.classList.remove("selected-button");
		medium.classList.add("selected-button");
		fast.classList.remove("selected-button");		
	});

	//fast button
	fast.addEventListener("click", function(){
		clearInterval(timer);
		TIME = 10;
		timer = setInterval(myTimer, TIME);
		slow.classList.remove("selected-button");
		medium.classList.remove("selected-button");
		fast.classList.add("selected-button");
	});

	//reset button
	reset.addEventListener("click", function(){
		red.increment = RED_INC;
		redSlider.value = RED_INC;
		redMobile.textContent = RED_INC;
		green.increment = GREEN_INC;
		greenSlider.value = GREEN_INC;
		greenMobile.textContent = GREEN_INC;
		blue.increment = BLUE_INC;
		blueSlider.value = BLUE_INC;
		blueMobile.textContent = BLUE_INC;
		console.log("red inc = " + red.increment + " green inc = " + green.increment + " blue inc = " + blue.increment);
	})
};

