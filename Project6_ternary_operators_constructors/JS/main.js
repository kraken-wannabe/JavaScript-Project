function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote() {
    const age = document.getElementById("age").value;
    const result = age >= 18? "Yes, you can vote!" : "Nope, you can't vote yet";
    document.getElementById("result").innerHTML = result;
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge","Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Make + " " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}
//Nested function
function strings1() {
    var start_string = "Hey";

    function Adding(str) {
        start_string = start_string + " " + str;
        }
        Adding("Yo!");
        document.getElementById("Nested_Function").innerHTML = start_string;
}