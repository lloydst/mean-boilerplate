const express = require('express')
const app = express();
const path = require('path')
const api = require('./server/routes') // route example
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// mongoose setup
const MONGOURI = process.env.MONGOURI || 'someback-upaddress';
// this .env file should be added to .gitignore since it contains passwords
mongoose.connect( MONGOURI, {useMongoClient: true})
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',express.static(path.join(__dirname, 'dist'))) // angular project
// the app.use that's commented out below is for static file hosting: like images text file's music
// app.use('/myuri', express.static(path.join(__dirname,'./file location relative to this file')));
app.use('/styleguide',express.static(path.join(__dirname,'styleguide')))
app.use('/api',api) // route example creates url's like: <host>/users/<routes from file>
app.use('*',express.static(path.join(__dirname, 'dist'))) //routes anything not caught by the routes above to your angular project if possible

const port = process.env.PORT||3000; // PORT is another variable that can be placed in the .env file
app.listen(process.env.PORT||3000, function(){
  console.log('Example app listening on port ' + port +'!')
})
