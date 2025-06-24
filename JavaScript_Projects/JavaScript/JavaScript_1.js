function Car_Function() {
	var Car_Output;
	var Cars = document.getElementById("Car_input").value;
	var Car_String = " is a great car!";
	switch(Cars) {
		case "Civic Type R":
			Car_Output = "Civic Type R" + Car_String;
		break;
		case "Corolla GR":
			Car_Output = "Corolla GR" + Car_String;
		break;
		case "Nissan 400Z":
			Car_Output = "Nissan 400Z" + Car_String;
		break;
		case "Subaru STI":
			Car_Output = "Subaru STI" + Car_String;
		break;
		case "Golf R":
			Car_Output = "Golf R" + Car_String;
		break;
		case "Audi S3":
			Car_Output = "Audi S3" + Car_String;
		break;
		default:
		Car_Output = "Please enter a car exactly as written on the above list.";
	}
	document.getElementById("Output").innerHTML = Car_Output;
}
function World_Function() {
	var A = document.getElementsByClassName("Click");
	A[0].innerHTML = "The text has changed!";
}
//Hello world stroke text in the box
	/*
	var c = document.getElementById("ID_Name");
	var ctx = c.getContext("2d");
	ctx.font = "30px Arial";
	ctx.strokeText("Hello World", 10, 50);
	*/
	
//gradient
	const canvas = document.getElementById("ID_Name");
	const ctx = canvas.getContext("2d")
	
	const my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
	my_gradient.addColorStop(0, "black");
	my_gradient.addColorStop(0.5, "red");
	my_gradient.addColorStop(1, "white");
	
	ctx.fillStyle = my_gradient;
	ctx.fillRect(20, 20, 150, 100);
	