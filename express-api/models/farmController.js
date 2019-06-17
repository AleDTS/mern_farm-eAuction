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

exports.getGeo = (req, res) => {
	Farm.find({farm_id: req.params.farm_id})
		.select('geojson latitude longitude')
		.then(data => {
			res.json([{
				geojson: data[0].geojson,
				latLng: {
					lat: data[0].latitude,
					lng: data[0].longitude
				}
			}])
		})
		.catch(err => {
			console.log('erro')
			logger.error(err)
			res.status(422).send(err.errors)
		})
}

exports.view = (req, res) => {
	console.log(req.body)
	Farm.find({farm_id: req.params.farm_id})
		.then(data => {
			res.json({farm: data})})
		.catch(err => {
				console.log('erro')
				logger.error(err)
				res.status(422).send(err.errors)
			})
}

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
