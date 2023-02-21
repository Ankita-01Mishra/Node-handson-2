var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/",(req,res)=>{
  res.send("I am on the homePage Express generator")
  res.end();
});
router.get("/gallerygenerator",(req,res)=>{
  res.send("I am on the gallery Express generator")
  res.end();
});
router.get("/contactgenerator",(req,res)=>{
  res.send("This is our contact address Express generator")
  res.end();
});
module.exports = router;
