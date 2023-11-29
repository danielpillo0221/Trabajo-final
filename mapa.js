var userLocation = {};

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      userLocation.lat = position.coords.latitude;
      userLocation.lng = position.coords.longitude;
      console.log(userLocation); // Imprime la ubicación en la consola

      // Después de obtener la ubicación del usuario, puedes utilizarla para actualizar el punto de partida y el marcador en el mapa.
      var puntoPartida = [userLocation.lat, userLocation.lng];
      var puntoLlegada = [-105, 40]; // Puedes ajustar esto como desees

      // Actualiza el mapa con el punto de partida y el marcador
      mapa.setView(puntoPartida, 13); // 13 es el nivel de zoom
      marcador.setLatLng(puntoPartida);

      // Puedes agregar una línea que conecte el punto de partida y el punto de llegada
      var line = L.polyline([puntoPartida, puntoLlegada], { color: 'red' }).addTo(mapa);
 });

  } else {
    console.log("La geolocalización no es soportada por este navegador.");
  }
}

getLocation();

var mapa = L.map("divdemapa").setView([-105, 40], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(mapa);
var marcador = L.marker([-105, 40]).addTo(mapa);   

marcador.bindPopup("Punto de partida");

function clickear(evento) {
  alert("Estás en " + evento.latlng);
}

mapa.on("click", clickear);

var myLines = [
  {
    "type": "LineString",
    "coordinates": [[-100, 40], [-105, 45], [-110, 55]],
  },
  {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]],
  },
];