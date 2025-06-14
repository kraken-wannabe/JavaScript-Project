//sentence method
function full_Sentence() {
  var part_1 = "I have ";
  var part_2 = "made this ";
  var part_3 = "into a complete ";
  var part_4 = "sentence.";
  var whole_sentence = part_1.concat(part_2, part_3, part_4);
  document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//slice method
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
//uppercase method
function convertToUpper() {
    var sentence = "writing codes is part of learning javascript!";
    var result = sentence.toUpperCase();
    document.getElementById("upperCaseResult").innerHTML = result;
}
//search method
function searchSomething() {
    var sentence = "JavaScript is the best!";
    var index = sentence.search("best");
    document.getElementById("searchResult").innerHTML = index;
}
//number method
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
//Precision Method
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(7);
}
//toFixed method
function toFixed() {
    var pi = 3.14159;
    document.getElementById("fixit").innerHTML = "Pi to 2 decimal places: " + pi.toFixed();
}
//valueof method
function valueOfExample() {
    var numObj = new Number(50);
    document.getElementById("OutputValue").innerHTML = "Primitive value: " + numObj.valueOf();
}

