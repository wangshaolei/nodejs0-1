var mysql = require('mysql2');
var mysql_pool = mysql.createPool({
    host: '127.0.0.1',  
    port: '3306', 
    user: 'root',  
    password: '123qwe',  
    database: 'node_demo'
});
module.exports = mysql_pool;