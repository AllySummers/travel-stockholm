function initMap() {
	var stockholm = {lat: 59.3293, lng: 18.0686};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: "Stockholm"
	});
	var marker = new google.maps.Marker({
		position: "Hotel C Stockholm",
		map: map
	});
}