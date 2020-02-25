var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/ps3', function(req, res, next) {
  let str = req.body.string;
  let con = str.length;
  res.render('users', { string: str, content: con});
});

module.exports = router;
