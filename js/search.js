
var cargarPagina = function () {
  btnRegistroGo.click(ingresoGoogle);
  
};
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

 function ingresoGoogle() {

   if(!firebase.auth().currentUser){    
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then(function(result) {

    var token = result.credential.accessToken;
    var user = result.user;
    console.log(user);
    location.href = "views/home.html";  

    }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    if (errorCode==='auth/account-exisst-with-diferent-credential') {
        alert("es el mismo usuario")
    }
    });
   }else{
       firebase.auth.signOut();
   }
 }

  

 
  var btnRegistro = $("#continue");
  var btnRegistroGo = $(".go-login");
  var nombre = $("#name");
  var correo = $("#email");
  var pass = $("#password");
  var confirPass = $("#passConfirm");
  var name = nombre.val();
  var email = correo.val();
  var password = pass.val();
  var auth = firebase.auth();

var db = firebase.database().ref().child('tours');
  db.on('value', function (snap) {
    var tours = snap.val();
    var plantillaFinal = "";
    var plantillaFinal2="";
    console.log(tours);
    $.each(tours, function (key, obj,e) {
      console.log(obj.nombre);
      mostrarTour(obj);


       });
    function mostrarTour (tour) {

      var locBusqueda = $("#buscar-tour");
      var articleTours = $("#tour-mostrar");
      var recomendacionesTour = $("#recomendaciones-tour");
      plantillaFinal += plantillaTour.replace("__nombre__",tour.nombre).replace("__fecha__",tour.fecha)
      .replace("__descripcion__",tour.descripcion).replace("__imagen__",tour.imagen);
      plantillaFinal2 += plantillaBusqueda.replace("__nombre__",tour.nombre)
      .replace("__descripcion__",tour.descripcion).replace("__imagen__",tour.imagen);

      locBusqueda.html(plantillaFinal2);
      articleTours.html(plantillaFinal);
      recomendacionesTour.html(plantillaFinal2);
      }

  });
    var plantillaTour = 
    '<div class="uk-card uk-card-default uk-width-1-2@m">'+
   ' <div class="uk-card-header">'+
       ' <div class="uk-grid-small uk-flex-middle" uk-grid>'+
            '<div class="uk-width-auto">'+
                '<img  width="140" height="140" src="__imagen__">'+
            '</div>'+
            '<div class="uk-width-expand">'+
                '<h3 class="uk-card-title uk-margin-remove-bottom">__nombre__</h3>'+
                '<p class="uk-text-meta uk-margin-remove-top">__fecha__</p>'+
           ' </div>'+
        '</div>'+
    '</div>'+
    '<div class="uk-card-body">'+
       ' <p>__descripcion__</p>'+
    '</div>'+
   ' <div class="uk-card-footer">'+
        '<a href="#" class="uk-button uk-button-text">Read more</a>'+
    '</div>'+
'</div>';
var plantillaBusqueda = 
              '<div>'+
                  '<div class="uk-card uk-card-hover uk-card-default">'+
                      '<div class="uk-card-media-top uk-text-center uk-padding">'+
                          '<img src="__imagen__" alt="tours">'+
                      '</div>'+
                     ' <div class="uk-card-body">'+
                          '<h3 class="uk-card-title">__nombre__</h3>'+
                          '<p>__descripcion__</p>'+
                      '</div>'+
                  '</div>'+
              '</div>';

    
					
      $(document).ready(cargarPagina);