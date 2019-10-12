//run with nodemon server.js
const express = require('express');

const script = require('./script');
script.fire();

const app = express();
const port = 3000;
app.get("/",function(request, response){
    response.sendFile(__dirname + "/index.html");

});
app.listen(port, () => console.log('Server is listening on port ${port}'));

