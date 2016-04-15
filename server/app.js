var express = require('express');
var index = require('./routes/index.js');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var pg = require('pg');
var connectionString;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', index);

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = true;
  connectionString = process.env.DATABASE_URL;
} else {
  connectionString = 'postgress://localhost:5432/sundin_scheduling_db';
  console.log("Connected to Local Sundin DB");
}

pg.connect(connectionString, function(err, client, done){
  if (err){
    console.log("Error connecting to DB!", err);
  } else {
    var query; // Create tables if they don't exist

    console.log("Connected to Local Sundin DB");
  }
});

var server = app.listen(port, function(){
  var port = server.address().port;
  console.log("Up and running on port: ", port);
});
