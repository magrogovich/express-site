var express = require('express');
var router = express.Router();

/* GET home page. */
var date = new Date()
router.get('/', function(req, res, next) {
  res.render('index',{date:date.getFullYear()})
});

module.exports = router;
