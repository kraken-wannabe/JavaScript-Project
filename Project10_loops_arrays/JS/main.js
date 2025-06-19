//while loop example
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}
//even number while loop
function Call_Loop() {
    let i = 2;
    let result = "";
    while (i <= 10) {
        result += i + "<br>";
        i += 2;
    }
    document.getElementById("Loop").innerHTML = result;
}
//for loop assignment
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    function for_Loop() {
        for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }
//Arrays and objects
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}
function constant_function() {
        const Musical_Instrument = {type:"Guitar", brand:"Fender", color:"Black"};
        Musical_Instrument.color = "blue";
        Musical_Instrument.price = "$900";
        document.getElementById("Constant").innerHTML = "The cost of the color " +
            Musical_Instrument.color + " " +
            Musical_Instrument.type + " was " + Musical_Instrument.price + ".";
}
//Let function let
function let_function() {
    var X = 82;
    document.write(X); {
        let X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);
}
//let function var
function let_function1() {
    var X = 82;
    document.write(X); {
        var X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);
}
//car object assignment
function car() {
    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        description : function () {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();
}