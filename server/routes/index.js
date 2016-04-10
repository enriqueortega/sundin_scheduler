var express = require('express');
var path = require('path');
var router = express.Router();
var events = require('./events.js');
var students = require('./students.js');

//routers for students and events

router.use('/students', students);
router.use('/events', events);

router.get('/*', function(req, res){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "../public/" + file));
});

module.exports = router;
