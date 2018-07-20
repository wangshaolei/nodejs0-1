var mysql_pool = require('./config.js');

exports.result_list = function(req, res){
    mysql_pool.execute('select * from table_users', '', function (err, rows) {
    });
}; 
