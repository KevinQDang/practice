const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const items = require('../database-mysql');
const db = require('../database-mongo');

const app = express();

// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
app.use(express.static(path.join(__dirname, '/../angular-client')));
app.use(express.static(path.join(__dirname, '/../node_modules')));

app.get('/beers', (req, res) => {
  
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
