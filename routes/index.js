
var express = require('express');
var router = express.Router();

router.use('/', require('./home.js'));
router.use('/users', require('./users.js'));

router.use('/db', require('./db.js'));
router.use('/add', require('./add.js'));

module.exports = router;

// module.exports = function(router){
//   router.use('/', require('./home.js'));
//   router.use('/users', require('./users.js'));
  
//   router.use('/db', require('./db.js'));
//   router.use('/add', require('./add.js'));
// };


