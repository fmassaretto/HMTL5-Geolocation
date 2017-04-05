function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        var language = navigator.language;
        if (language == "pt-BR")
            document.getElementById("notSupported").innerHTML = "Geolocalização não é suportado por esse navegador.";
        else
            document.getElementById("notSupported").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    myMap(lat, lng);
    console.log("Lat: " + lat + " Long: " + lng);
}

function myMap(lat, lng) {
    var mapOptions = {
        center: new google.maps.LatLng(lat, lng),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: {
            lat: lat,
            lng: lng
        },
        map: map,
        title: 'Você está aqui!'
    });
}