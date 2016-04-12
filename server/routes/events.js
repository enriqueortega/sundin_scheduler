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

// POST TO DB
router.post("/*", function(req,res){
  console.log("We're posting to the events");

  var title = req.body.title;
  var date = req.body.date;
  var start = req.body.start;
  var end = req.body.end;

  console.log(req.body);

  pg.connect(connectionString, function(err, client, done){
    if (err) {
      console.log('error connecting to DB:', err);
      res.status(500).send(err);
      done();
      return;
    }

    var query = client.query('INSERT INTO events_table (title, date, start_time, end_time) VALUES ($1, $2, $3, $4);', [title, date, start, end]);

    query.on('end', function(){
      res.status(200).send("Successful Insertion of Event");
      done();
    });

    query.on('error', function(error){
      console.log("Error inserting student into DB:", error);
      res.status(500).send(error);
      done();
    });
  });
});

router.get('/*', function(req,res){
  console.log("We're gathering up events");

  pg.connect(connectionString, function(err, client, done){
    if (err){
      res.status(500).send(err);
      done();
      return;
    }

    var results = [];
    var query = client.query('SELECT * FROM events_table;');

    query.on('row', function(row){
      results.push(row);
    });

    query.on('end', function(){
      res.send(results);
      done();
    });

    query.on('error', function(error){
      console.log("We have an error getting events from DB:", error);
      res.send(500).send(error);
      done();
    });
  });
});

module.exports = router;
