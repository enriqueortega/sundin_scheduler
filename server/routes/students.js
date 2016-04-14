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
  console.log("We're posting to the students");

  var name = req.body.name;
  var email = req.body.email;
  var hours = req.body.hours;
  var unavailability = req.body.unavailability;

  console.log('______________');
  console.log(unavailability);
  console.log('______________');


  pg.connect(connectionString, function(err, client, done){
    if (err) {
      console.log('error connecting to DB:', err);
      res.status(500).send(err);
      done(); // Not sure which one of these is necessary
      return;
    }

    var query = client.query('INSERT INTO students_table (name, hours, email, unavailability) VALUES ($1, $2, $3, $4);', [name, hours, email, unavailability]);

    query.on('end', function(){
      res.status(200).send("Successful Insertion of Student");
      done();
    });

    query.on('error', function(error){
      console.log("Error inserting student into DB:", error);
      res.status(500).send(error);
      done();
    });
  });
});

// GET FROM DB
router.get('/*', function(req, res){
  console.log("We're gathering up students");

  pg.connect(connectionString, function(err,client,done){
    if (err){
      res.status(500).send(err);
      done();
      return;
    }

    var results = [];
    var query = client.query('SELECT * FROM students_table;');

    query.on('row', function(row){
      results.push(row);
    });

    query.on('end', function(){
      res.send(results);
      done();
    });

    query.on('error', function(error){
      console.log("We have an error getting people from DB:", error);
      res.send(500).send(error);
      done();
    });
  });
});

router.put("/*", function(req,res){
  console.log("We're deleting the students");

  console.log(req.body);

  var id = req.body.studentId;

  pg.connect(connectionString, function(err, client, done){
    if (err) {
      console.log('error connecting to DB:', err);
      res.status(500).send(err);
      done(); // Not sure which one of these is necessary
      return;
    }


    var query = client.query('DELETE FROM students_table WHERE id = ($1);', [id]);

    query.on('end', function(){
      res.status(200).send("Successful Insertion of Student");
      done();
    });

    query.on('error', function(error){
      console.log("Error inserting student into DB:", error);
      res.status(500).send(error);
      done();
    });
  });
});


module.exports = router;
