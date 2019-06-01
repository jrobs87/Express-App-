// brings the .env variables into the app
require('dotenv').config();

// express setup 
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// brings in our db setup 
const db = require('./config/database')
 
// simple query to test db connection module
db.connection.query(
  'SELECT * FROM `table_1`',
  function(err, results, fields) {
      if (err) {
          console.log('Error connecting to database');
      }
    console.log(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
  }
);

// test db connection
console.log(db.db_test);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`${process.env.app_name} listening on port ${port}!`));