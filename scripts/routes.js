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

  module.exports = router;