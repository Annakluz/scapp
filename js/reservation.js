var cargarPagina = function () {

};  
var btnRegistroGo = $("#go-login1");
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBeLn8IzPrOcpTviCxdy3id3xgyoa-2fXo",
    authDomain: "scapp-87484.firebaseapp.com",
    databaseURL: "https://scapp-87484.firebaseio.com/",
    projectId: "scapp-87484",
    storageBucket: "scapp-87484.appspot.com",
    messagingSenderId: "437272620630"
  };
 firebase.initializeApp(config);
 var db = firebase.database().ref().child('tours');
    db.on('value', function (snap) {
    var tours = snap.val();

    $.each(tours, function (key, obj,e) {
    if($(".key-reserva").attr(data-key)==key){
        console.log("no se que hago");
    };
      
    });
  });


 $(document).ready(cargarPagina);