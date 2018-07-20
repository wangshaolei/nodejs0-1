const DB = require('../database/users');
const Op = require('sequelize').Op;

let App = {};

App.list = function(){
    var filter = {
		where:'',
		order:[
		]
	}

    return DB.findAll(filter);
}

module.exports = App;
