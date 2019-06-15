const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const NdviSchema = new Schema({
	date:	Date,
	value:	Number,
	farm: {
		 type: ObjectId,
		 ref: 'Farm'
	 }
});

let Ndvi = module.exports = mongoose.model('Ndvi', NdviSchema);
