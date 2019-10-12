//run with nodemon server.js
const express = require('express');
const path = require('path');
const routes = require('./scripts/routes');

require('./scripts/script');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'pages'));

app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(port, () => console.log('Server is listening on port ${port}'));


