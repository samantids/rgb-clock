window.onload = function(){
	var rgbButton = document.getElementById("get-rgb"),
		rgbDiv = document.getElementById("rgb"),
		clockHour = document.getElementById("clock-hour"),
		clockMinute = document.getElementById("clock-minute"),
		clockSecond = document.getElementById("clock-second"),
		red = new Color (1, 2, 2),
		green = new Color (2, 5, 5),
		blue = new Color (1, 4, 4),
		timer = setInterval(myTimer, 100);

	function Color(value, increase, decrease){
		this.value = value;
		this.descend = false;
		this.increase = increase;
		this.decrease = decrease;
		this.colorChanger = colorChanger;
	}

	function colorChanger(){
		if (this.descend){
			this.value-=this.decrease;
		} else {
			this.value+=this.increase;
		}
		if (this.value >= 255 || this.value <= 0){
			this.descend = !(this.descend);
		}
	}

	function myTimer() {
	    var date = new Date(),
	    	dateArr = date.toLocaleTimeString().split(":");

	    clockHour.textContent = dateArr[0];
	    clockMinute.textContent = dateArr[1];
	    clockSecond.textContent = dateArr[2];
	    
	    //document.getElementById("clock").innerHTML = dateArr[0] + "<br>" + dateArr[1] + "<br>" + dateArr[2];
	    document.body.style.background = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";

	    red.colorChanger();
	    green.colorChanger();
	    blue.colorChanger();
	}



	rgbButton.addEventListener("click", function(){
		rgbDiv.textContent = "RGB(" + red.value + "," + green.value + "," + blue.value + ")";
	})
};

