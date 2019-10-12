//run with nodemon server.js
const express = require('express');

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
//require("firebase/auth");
require("firebase/firestore");
//firebase.analytics();

const externKey = require('./firebase');

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

const app = express();
const port = 3000;
app.get("/",function(request, response){
    response.sendFile(__dirname + "/index.html");

});
app.listen(port, () => console.log('Server is listening on port ${port}'));

