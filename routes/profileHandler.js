var express = require('express');
var router = express.Router();
var fs = require('fs');
var profileData = JSON.parse(fs.readFileSync('public/data/ayush.json'));

router.post('/profileData', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.json(profileData);
});

/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('userprofile');
});

module.exports = router;
