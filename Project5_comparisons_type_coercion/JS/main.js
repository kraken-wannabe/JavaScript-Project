//this writes to the web page
{
    var t = true; //variable with a Boolean data type
    document.write((typeof t) + "<br>"); //printing the value of t
    document.write("10"+8 + "<br>"); //showing that "10"+8 = 108 that is different than 10+8 = 18
    document.write((10 > 2) + "<br>"); //greater than "true statement"
    document.write((10 < 2) + "<br>"); //less than "false statement"
    document.write((10 + 5 == 15) + "<br>"); //addition and double equal sign true with break
    document.write((10 == 10) + "<br>"); //double equal signs true with break
    document.write((3 == 11) + "<br>"); //double equal signs false with break
    X = 10; //V
    Y = 10; //A
    W = 10; //R
    Z = "orange";    //I
    A = "6"; //A
    B = 6;  //B
    C = 9;  //L
    D = 1;  //ES
    document.write((X===Y) + "<br>"); // same data type and value with break TRUE
    document.write((W===Z) + "<br>"); //different data type and value with break FALSE
    document.write((A===B) + "<br>"); // different data type but same value with break FALSE
    document.write((C===D) + "<br>"); // same data type but different value with break FALSE
    document.write((10 > 2 && 8 > 7) + "<br>"); //AND operator with true statement
    document.write((10 < 2 && 8 < 9) + "<br>"); //AND operator with false statement
    document.write((10 > 2 || 8 > 2) + "<br>"); //OR operator with true statement
    document.write((10 < 2 || 3 < 2) + "<br>"); //OR operator with false statement
}
//this is not operator
function its_not() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
function its_not1() {
    document.getElementById("Not1").innerHTML = !(5 > 10);
}
//this logs to the developer console
console.log(2 + 2);
console.log("10 + 8 as a string = " + "10" + 8);
console.log("Is 10 greater than 2? " + (10 > 2));
console.log("Is 10 less than 2? " + (10 < 2));
//infinity functions
function d_infinity() {
    document.getElementById(Infinity).innerHTML = 2E310;
}
function d_infinity1() {
    document.getElementById("Infinity1").innerHTML = -2E310;
}
