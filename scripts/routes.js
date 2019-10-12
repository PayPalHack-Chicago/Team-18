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
router.get('/student', (req, res) => {
    console.log('Request for student page recieved');
    res.render('studentList');
  });
router.get('/pricing', (req, res) => {
    console.log('Request for pricing page recieved');
    res.render('pricing');
  });


  module.exports = router;