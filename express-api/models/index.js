const mongoose = require('mongoose');
const csv = require('fast-csv');
const fs = require('fs');

// import Farm from 'farm';
var Farm = require('../models/farm')

const eraseDatabaseOnSync = true;

const uri = 'mongodb://db:27017/test'
const csvFarm = __dirname+'/../public/data/farms.csv'

var farmStream = fs.createReadStream(csvFarm);


// Database connection
const connectDb = () => {
	// return mongoose.connect(process.env.DATABASE_URL)
	return mongoose.connect(uri,  {useNewUrlParser: true })
};

connectDb()
	.then(async() => {
		  if (eraseDatabaseOnSync) {
		    await Promise.all([
		      models.Farm.deleteMany({})
			  	.then(res =>{console.log(res)}),
		    ]);
		  }

		  seedDB();

		  console.log('MongoDB Connected')
	})
	.catch(err => console.log(err));

const seedDB = async() =>{
	var farms = [];
	csv
		.fromStream(farmStream, {headers: true, ignoreEmpty: true})
		.on('data', function(data){
			// console.log(typeof data)
			data['_id'] = new mongoose.Types.ObjectId();
			farms.push(data);
			console.log(farms);
		})
		.on("end", function(){
			// console.log(
			Farm.create(farms, (err) =>{
				if (err) throw err;
			})
	    	// console.log('done')
	    });
}

const models = { Farm };


module.exports = {models, connectDb}
