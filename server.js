//run with nodemon server.js
const express = require('express');

const app = express();
const port = 3000;
app.use(express.static(__dirname + '/styles'));
app.get("/",function(request, response){
    response.sendFile(__dirname + '/index.html');
});


app.listen(port, () => console.log('Server is listening on port ${port}'));



const script = require('./scripts/script');
script.fire();
