
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
     var nombre = snap.val().tour1.nombre;
     var fecha = snap.val().tour1.fecha;
     var descripcion = snap.val().tour1.descripcion;
     var dirImg = snap.val().tour1.imagen;
     var lugarDescrip = document.getElementById("descrip");
     var lugar = document.getElementById("tours");
     var lugarFecha = document.getElementById("fecha");
     var imgTour=document.getElementById("img-tour");
     lugar.innerText = nombre;
     lugarFecha.innerText = fecha;
     lugarDescrip.innerText = descripcion;
     imgTour.setAttribute("src", dirImg);
     
  });
