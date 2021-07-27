const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.MYSQL_SERVERE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected');
});

module.exports = connection;