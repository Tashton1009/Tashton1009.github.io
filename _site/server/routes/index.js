var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
var path = require('path');

router.get('/', function(request, response){
  // response.send('hello world');
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
  console.log('here is a console log');
});
module.exports = router;
