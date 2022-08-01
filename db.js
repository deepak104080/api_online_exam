const mysql = require('mysql2');

module.exports = mysql.createConnection({
  host: process.env.DB_HOST,
  user: 'root',
  password: '',
  database: 'nstest',
});
