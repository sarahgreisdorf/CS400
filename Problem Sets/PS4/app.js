var express = require('express')
var request = require('request')

var app = express();

app.set('view engine', 'ejs')

var city = 'Boston';
var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf1b846977ea507d0efa64556f0b2d37`;

var indexRouter = require('./routes/weather');

app.use('/ps4', indexRouter);

app.get('/', function(req, res) {

    request(url, function(error, response, body) {

        weather_json = JSON.parse(body);
        console.log(weather_json);

        var weather =  {
            city: city,
            temperature: Math.round(weather_json.main.temp*(9/5) - 459.67),
            description: weather_json.weather[0].description,
            icon: weather_json.weather[0].icon
        };

        var weather_data = {weather: weather};

        res.render('weather', weather_data);

    });


})
app.listen(8000);