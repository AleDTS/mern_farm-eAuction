let Farm = require('./farm');

// List all farms
exports.list = (req, res) => {

    Farm.find({})
		.select('name culture variety yield_estimation price')
		.then(farms => {
			res.json({farms: farms})
			// console.log(farms)
		})
		.catch(err => {
			console.log('erro')
			logger.error(err)
			res.status(422).send(err.errors)
		})
};

// exports.post = function (req, res) {
//     const farm = new Farm();
//     farm.farm_id = req.body.farm_id;
//
// 	farm.save(function (err) {
// 		if (err)
// 			res.json(err);
//
// 		res.json({
// 			message: 'New contact created!',
// 			data: farm
// 		});
// 	});
// };
