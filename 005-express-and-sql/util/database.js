const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'my_new_db',
    password: 'root'
})

module.exports = pool.promise();