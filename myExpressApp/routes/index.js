var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ps3', function(req, res, next) {
  res.render('index', { string: 'Hey now' });
});

/*router.post('/', function (req, res) {
  res.send('POST request to the homepage')
})*/

module.exports = router;
