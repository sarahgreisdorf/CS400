var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ps4', function(req, res, next) {
    res.render('weather');
});

module.exports = router;