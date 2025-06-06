	function doMath() {
		var Addition = 4 + 4;
		document.getElementById("Math").innerHTML = "4 + 4 = " + Addition;
    }
	function doMath1() {
		var Subtraction = 8 - 4;
		document.getElementById("Math1").innerHTML = "8 - 4 = " + Subtraction;
	}
	function doMath2() {
		var Multiplication = 4 * 15;
		document.getElementById("Math2").innerHTML = "4 * 15 = " + Multiplication;
	}
	function doMath3() {
		var Division = 60 / 5;
		document.getElementById("Math3").innerHTML = "60 / 5 = " + Division;
	}
	function doMath4() {
		var moreMath = (12 + 2) * 10 / 7 - 5;
		document.getElementById("Math4").innerHTML = "12 plus 2, multiplied by 10, divided by 7 and then subtracted by 5 equals " + moreMath;
	}
	function doMath5() {
		var Remainder = 32 % 6;
		document.getElementById("Math5").innerHTML = "When you divide 32 by 5 you have a remainder of: " + Remainder;
	}
	function doMath6() {
		var xi = 10;
		document.getElementById("Math6").innerHTML = -xi;
	}
	function increment() {
		var y = 5;
		y++;
		document.write(y);
	}
	function decrement() {
		var z = 5.25;
		z--;
		document.write(z);
	}
	function doMathRandom() {
		var randomNumber = Math.random() * 100;
		document.getElementById("MathRandom").innerHTML = "keep clicking to see random number between 0 and 100: " + randomNumber;
	}
