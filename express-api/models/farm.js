const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LogNDVI = require('./ndvi')

const FarmSchema = new Schema({
	farm_id:			Number,
	name:				String,
	latitude:			Number,
	longitude:			Number,
	culture:			String,
	variety:			String,
	total_area:			Number,
	yield_estimation:	Number,
	price:				Number,
	geojson:			Object,
	// https://stackoverflow.com/questions/7810892/node-js-creating-relationships-with-mongoose
	log_ndvi: {
		type: 	Schema.Types.ObjectId,
		ref:	'LogNDVI'
	}
	// log_ndvi: [	{
	// 	date: 	Date,
	// 	value: 	Number
	// }]
});

FarmSchema.pre('save', function(next) {
	console.log('added farm '+this.farm_id)
	console.log(this)
	// this.model('NDVI').find({farm: this._id}, next)
});

FarmSchema.pre('remove', function(next) {
	// console.log('oi')
	// this.model('NDVI').find({farm: this._id}, next)
});

module.exports = exports = mongoose.model('Farm', FarmSchema);
