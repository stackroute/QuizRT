var express = require('express');
var fs = require('fs');
var router = express.Router();
var mongoose = require('mongoose');
var Profile;
var profileData;

var Profile = require("../models/profile");
var Topics=require("../models/topics");


router.get('/profileData', function(req, res, next) {
  console.log("this is form profile data"+req.params.id);
    Profile.findOne({userId: "LA1"})
          .exec(function(err,data){
            profileData = data;
            var i=0;
            for(i=0;i < profileData.topicsPlayed.length;i++)
            {
            var topicid=data.topicsPlayed[i].topicId;
            console.log(topicid);
            Topics.findOne({"topicId":topicid})
            .exec(function(err,data2){
              console.log(data2);
              // profileData.topicsPlayed[i].topicName=data2.topicName;
              // profileData.topicsPlayed[i].topicIcon=data2.topicIcon;
            })
            }
            res.json(profileData);
          });
});

/* GET home page. */
router.get('/',function(req, res, next) {
  //var userId = req.params.id;
  //console.log("This is from userprofie"+userId);
  /*Profile.findOne({userId: req.params.id})
        .exec(function(err,data){
          if(!data){
          profileData = data;
          res.render("fileNotFound");
        }*/
    res.render('userprofile');
        //});
});

module.exports = router;
