var express = require('express');
var router = express.Router();

// Import farm controller
let farmController = require('./../models/farmController');

router.use(function(req, res, next){
	console.log('rotas');
	next();
})

router.get('/', function(req, res, next) {
  res.json({ message: 'uhuul' });
});

//Route to list all farms
router.route('/farms')
	.get(farmController.list)

module.exports = router;
