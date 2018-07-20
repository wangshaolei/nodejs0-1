
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  	res.render('index', { title: 'Express' });
});

//这里用别名占位,路由文件直接/
module.exports = function(app){

  app.use('/users', require('./users.js'));

  app.use('/db', require('./db.js'));
  app.use('/add', require('./add.js'));

};
