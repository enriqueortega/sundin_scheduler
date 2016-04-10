var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString;


if(process.env.DATABASE_URL) {
  pg.defaults.ssl = true;
  connectionString = process.env.DATABASE_URL;
} else {
  connectionString = 'postgress://localhost:5432/sundin_scheduling_db';
}

router.post("/*", function(req,res){
  console.log("We're posting to the events");
});

module.exports = router;
