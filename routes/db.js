var express = require('express');
var utility = require('utility');
var mysql_pool = require('../database/config.js');
var User = require('../core/users');
var logger = require('../config/log4js_config').getLogger('/routes/express.js');

var router = express.Router();

router.get('/', function(req, res) {

	// await mysql_pool.execute('select * from table_users', '', function (err, rows) {
	// 	res.send(rows);
	// });

	 (async function(){
		try{
			let list = await User.list();
			res.send({
				code:1,
				result:list
			})
		}catch(err){
			logger.error('list error --->',err);
			res.send({
				code:0,
				msg:'请稍后重试'
			})
		}
	})();

});

module.exports = router;