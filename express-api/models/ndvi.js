const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const NDVISchema = new Schema({
	date:	Date,
	value:	Number,
	farm: {
		 type: ObjectId,
		 ref: 'Farm'
	 }
});

const NDVI = mongoose.model('NDVI', NDVISchema);

module.exports = {NDVI};
