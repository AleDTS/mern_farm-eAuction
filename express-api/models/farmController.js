let Farm = require('./farm');

// List all farms
exports.list = (req, res) => {
	const query = req.query || {};

    Farm.find({query})
		.then(farms => {
			res.json(farms)
		})
		.catch(err => {
			console.log('erro')
			logger.error(err)
			res.status(422).send(err.errors)
		})
};
