var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var  article = require("../models/Article.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  article.all(function(data) {
    var hbsObject = {
      article: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});