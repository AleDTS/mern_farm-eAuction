const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
	geojson:			Object
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
