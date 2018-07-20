const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('users', {
        supplies: ['zhangsan', 'lisi', 'wangwu', 'java', '.net']
    })
  });

module.exports = router;