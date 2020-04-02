/* Load the HTTP library */
var http = require("http");
var express = require('express');
var router = express.Router();

/* Create an HTTP server to handle responses */

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);

/* GET home page.
router.get('/ps4', function(req, res, next) {
    res.render('results', { string: 'Hey now' });
});
*/
