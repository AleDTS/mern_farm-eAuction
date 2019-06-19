var express = require('express');
var router = express.Router();

// Import farm controller
let farmController = require('./../models/farmController');

router.use(function(req, res, next){
	next();
})

//API ROUTES
//=============================================================================

//Route to list all farms
router.route('/farms')
	.get(farmController.list)

router.route('/farms/:farm_id')
	.get(farmController.view)

router.route('/farms/:farm_id/getGeo')
	.get(farmController.getGeo)

//=============================================================================

module.exports = router;
