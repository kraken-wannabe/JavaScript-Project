    function my_Dictionary() {
		var Animal = {
			Species:"Dog",
			Color:"Black",
			Breed:"Labrador",
			Age:5,
			Sound:"Bark!"
		};
        delete Animal.Sound;    //this removes sound variable from the dictionary before it displayed.
		document.getElementById("Dictionary").innerHTML = Animal.Sound;
	}