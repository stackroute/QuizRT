var express = require('express');
var fs = require('fs');
var router = express.Router();
var mongoose = require('mongoose');
var Profile;
var profileData;

var Profile = require("../models/profile");


router.post('/profileData/:id', function(req, res, next) {
  console.log("this is form profile data"+req.params.id);
    Profile.findOne({userId: req.params.id})
          .exec(function(err,data){
            profileData = data;
            res.json(profileData);
          });
});

/* GET home page. */
router.get('/:id',function(req, res, next) {
  var userId = req.params.id;
  console.log("This is from userprofie"+userId);
  Profile.findOne({userId: req.params.id})
        .exec(function(err,data){
          if(!data){
          profileData = data;
          res.render("fileNotFound");
        }
        res.render('userprofile', {userId: userId});
        });
});

module.exports = router;
