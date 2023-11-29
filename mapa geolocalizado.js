const lugar = document.getElementById("destino").value;
//desde aqui empieza la vision del mapa//
var userLocation = {};

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      userLocation.lat = position.coords.latitude;
      userLocation.lng = position.coords.longitude;
      console.log(userLocation); // Imprime la ubicación en la consola

      // Después de obtener la ubicación del usuario, puedes utilizarla para actualizar el punto de partida y el marcador en el mapa.
      var puntoPartida = [userLocation.lat, userLocation.lng];
      var puntoLlegada = [6.030201, -75.431743]; // Puedes ajustar esto como desees

      // Actualiza el mapa con el punto de partida y el marcador
      mapa.setView(puntoPartida, 13); // 13 es el nivel de zoom
    });
  }
}

getLocation();
var mapa = L.map("divdemapa");
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(mapa);

L.Routing.control({
  waypoints: [
    L.latLng(5.968408833343811, -75.36062938578465),
    L.latLng(6.968408833343811, -75.36062938578465),
  ],
}).addTo(mapa);
