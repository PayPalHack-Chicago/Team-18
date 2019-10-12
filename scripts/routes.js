const express = require('express');
const router = express.Router();

router.get("/",(req, res) => {
    console.log('Request for home recieved');
    res.render('index');
});

router.get('/login', (req, res) => {
    console.log('Request for login recieved');
    res.render('login');
  });

  router.get('/register', (req, res) => {
    console.log('Request for register recieved');
    res.render('register');
  });

  router.get('/studentLanding', (req, res) => {
    console.log('Request for student landing recieved');
    res.render('studentLanding');
  });

  router.get('/tutorLanding', (req, res) => {
    console.log('Request for tutor landing recieved');
    res.render('tutorLanding');
  });

  module.exports = router;