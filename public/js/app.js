//app-loguin
var fbButton = document.querySelector('.fb-login');
var goButton = document.querySelector('.go-login');

//Inicializando firebase
var config = {
  apiKey: "AIzaSyB-n-SXOHAH0EL3Js_FPG0YHzPi6twVqIU",
  authDomain: "login-con-redes-sociales-308dc.firebaseapp.com",
  databaseURL: "https://login-con-redes-sociales-308dc.firebaseio.com",
  projectId: "login-con-redes-sociales-308dc",
  storageBucket: "",
  messagingSenderId: "322305324154"
};
firebase.initializeApp(config);

var loginWithfb= function (e){
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log('User', user);
    console.log('Email', user.email );
    console.log('User', user.displayName);
     window.location.assign("views/home.html");
  }).catch(function(error) {
    var errorMessage = error.message;
    console.log('error', errorMesage);
  });
}

var loginWithgo= function (e){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log('User', user);
    console.log('Email', user.email );
    console.log('User', user.displayName);
  }).catch(function(error) {
    var errorMessage = error.message;
    console.log('error', errorMesage);
  });
}
fbButton.addEventListener('click', loginWithfb);
goButton.addEventListener('click', loginWithgo);
