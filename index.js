var express = require('express');
var cookieParser = require('cookie-parser');//cookie Parser
var bodyParser = require('body-parser');//JSON data

//Inbuild Functions
const userManagementRoutes = require('./src/routes/userManagementRoutes');
const app = express();

//view Engine
app.set('view engine', 'pug');
app.set('views', './src/views/userManagement');

//for cookie parser
app.use(cookieParser());

// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

//Static File Server
app.use('/Malips', express.static('public'));

//Routes
app.use('/', userManagementRoutes)

//server
app.listen(3000);