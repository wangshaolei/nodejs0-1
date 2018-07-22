const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('users', {
        supplies: ['张三', '李四', '王五', '麻六', '小七']
    })
  });

router.get('/getUser', function(req, res){
    res.send('getUser');
});

module.exports = router;