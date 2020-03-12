var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/api/facebook',function(req,res,next){

// });

// router.get('/auth/facebook',passport.authenticate('facebook'));

module.exports = router;
