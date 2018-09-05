function whereToEat() {
	restaurants = ["Mom's Kitchen", "Stockholms Gastabud", "Kajsas Fisk", "Lilla Ego", "Operakallaren", "Gastrologik", "Gunters Korvar", "Nystekt Stromming", "Falafelbaren"];
	document.getElementById("where-to-eat-button").innerHTML = "Pick Again!";
	document.getElementById("where-to-eat-button").style = "margin-left: 47.75%;"
	whereEat = document.getElementById("where-to-eat");
	whereEat.innerHTML = restaurants[Math.floor(Math.random() * restaurants.length)];

}