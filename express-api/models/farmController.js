let Farm = require('./farm');
let LogNDVI = require('./farm');

// List all farms
exports.list = (req, res) => {

    Farm.find({})
		.select('farm_id name culture variety yield_estimation price')
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

// Get geojson and coordinates from one farm by id
exports.getGeo = (req, res) => {
	Farm.find({farm_id: req.params.farm_id})
		.select('geojson latitude longitude')
		.then(data => {
			res.json([{
				geoj: data[0].geojson,
				coord: {
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

// Get data from one farm by id
exports.view = (req, res) => {
	// console.log(req.body)
	Farm.find({farm_id: req.params.farm_id})
		.populate('log_ndvi')
		.then(data => {
			res.json({farm: data})})
		.catch(err => {
				console.log('erro')
				logger.error(err)
				res.status(422).send(err.errors)
			})
}

exports.getNdvi = (req, res) => {
	Farm.find({
		farm_id: req.params.farm_id
	}).populate('log_ndvi')
	.then(data => {
		res.json({log_ndvi: data[0].log_ndvi.log_ndvi})
	}).catch(err => {
		console.log('erro')
		logger.error(err)
		res.status(422).send(err.errors)
	})
}
