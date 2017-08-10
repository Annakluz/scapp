var cargarPagina = function () {

};

var obtenerUbicacion = function (e) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarPosicion);
    } else {
        alert("Actualice su navegador");
    }
};

var mostrarPosicion = function (posicion) {
    var misCoordenadas = {
        lat: posicion.coords.latitude,
        lng: posicion.coords.longitude
    };
    console.log(misCoordenadas)
    mostrarMapa(misCoordenadas);
};

var mostrarMapa = function (coordenadas) {
    var mapa = new google.maps.Map($('#mapa'), {
      zoom: 18,
      center: coordenadas
    });
    var marcadorPosicion = new google.maps.Marker({
      position: coordenadas,
      map: mapa
    });
}

$(document).ready(cargarPagina);
