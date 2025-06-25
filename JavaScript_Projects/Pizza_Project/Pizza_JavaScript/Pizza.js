function getReceipt() {
    // Start building the receipt string with a header
    var text1 = "<h3>You Ordered:</h3>";

    // Initialize total cost
    var runningTotal = 0;

    // This will hold the cost of the selected pizza size
    var sizeTotal = 0;

    // Get all radio buttons with class "size" (pizza sizes)
    var sizeArray = document.getElementsByClassName("size");

    // Loop through all size options to find which one is checked
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            // Add selected size to receipt text
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // Determine the price based on selected size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "XXLarge Pizza") {
        sizeTotal = 20;
    }

    // Add the size price to the running total
    runningTotal = sizeTotal;

    // Debugging logs
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");

    // Proceed to calculate toppings and update the receipt
    getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
    // Initialize topping cost
    var toppingTotal = 0;

    // Array to store selected toppings
    var selectedTopping = [];

    // Get all checkboxes with class "toppings"
    var toppingArray = document.getElementsByClassName("toppings");

    // Loop through all toppings to find which ones are checked
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            // Add topping to array
            selectedTopping.push(toppingArray[j].value);

            // Add topping to receipt text
            text1 = text1 + toppingArray[j].value + "<br>";

            // Debug log for each selected topping
            console.log("selected topping item: (" + toppingArray[j].value + ")");
        }
    }

    // Determine total topping cost
    // First topping is free, each additional topping is $1
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = toppingCount - 1;
    } else {
        toppingTotal = 0;
    }

    // Add topping cost to the running total
    runningTotal = runningTotal + toppingTotal;

    // Debug logs for toppings
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");

    // Update HTML with receipt and total price
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML =
        "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}
