const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FarmSchema = new Schema({
	farm_id:			Number,
	// farm_id:			ObjectId,
	name:				String,
	latitude:			Number,
	longitude:			Number,
	culture:			String,
	variety:			String,
	total_area:			Number,
	yield_estimation:	Number,
	price:				Number
});

FarmSchema.statics.findByName = async function (id) {
	let farm = await this.findOne({
		farm_id: id
	})

	return farm;
}

FarmSchema.pre('save', function(next) {
	console.log('added farm '+this.farm_id)
	// this.model('NDVI').find({farm: this._id}, next)
});

FarmSchema.pre('remove', function(next) {
	// console.log('oi')
	// this.model('NDVI').find({farm: this._id}, next)
});

let Farm = module.exports = mongoose.model('Farm', FarmSchema);

// module.exports.get = function (callback, limit) {
//     Farm.find(callback).limit(limit);
// }
