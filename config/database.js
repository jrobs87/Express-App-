// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'development_db',
  password: process.env.db_password
});

let test = 'Success: dB config (/config/db.js)\n';

exports.connection = connection
exports.db_test = test;
 