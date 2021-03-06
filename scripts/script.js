// Your web app's Firebase configuration

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
//var firebaseui = require('firebaseui');
//firebase.analytics();

const externKey = require('./firebase');

var dropin = require('braintree-web-drop-in');
dropin.create({ 
    authorization: 'CLIENT_AUTHORIZATION',
    container: '#dropin-container',
    paypal: {
      flow: 'vault'
    }
});

let firebaseConfig = externKey.key(); 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

db.collection('tutors').get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
    });
})
.catch((err) => {
    console.log('Error getting documents', err);
});
