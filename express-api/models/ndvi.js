const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const NdviSchema = new Schema({
	log_ndvi: [{
		date: 	Date,
		value: 	Number
	}]
});

let Ndvi = module.exports = mongoose.model('LogNDVI', NdviSchema);
