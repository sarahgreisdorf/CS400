var express = require('express')
var request = require('request')
var path = require('path');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

var city = 'Boston';
var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf1b846977ea507d0efa64556f0b2d37`;


var indexRouter = require('./routes/index');

app.use('/ps4', indexRouter);


app.listen(8000);