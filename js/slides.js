setInterval("changeImage()", 3000);

var x = 1;

function changeImage() {
	document.getElementById("slideimg").src="img/slideshow/img-" + x + ".jpg";
	x++
	if (x == 4) {
		x = 1;
	}
}