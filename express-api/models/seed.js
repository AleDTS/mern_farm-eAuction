const csv = require('fast-csv');
const fs = require('fs');
const EventEmitter = require('events');
const mongoose = require('mongoose');
const readline = require('readline');

// import models;

let Farm = require('./farm');
// let Farm = mongoose.Farm;
let Ndvi = require('./ndvi');

// import csv public file
const csvFarm = __dirname+'/../public/data/farms.csv';
const csvNDVI = __dirname+'/../public/data/farms_ndvi.csv';

// farm stream
const farmStream = fs.createReadStream(csvFarm);

(async() => {
	try{
		await Promise.all([
			Farm.deleteMany({}),
			Ndvi.deleteMany({}),
		]);

		await new Promise((resolve,reject) => {
			let buffer = []
			let stream = fs.createReadStream(csvFarm)
				.pipe(csv({headers: true}))
				.on("error", reject)
			    .on('data', async (data) => {
					stream.pause();
					buffer.push(data);
					stream.resume();
			      	// let farm = new Farm(data)
					// const newFarm = await farm.save((err)=>console.log(err))
				  	// console.log(newFarm === farm)
			    })
			    .on('end', async (res) => {
					try {
						let newFarm = await Farm.insertMany(buffer, (err,docs) => {
							if (err) console.log('ERROR: '+err)
							// console.log(docs)
						})
						buffer = []
						resolve();
					} catch(e) {
						stream.destroy(e);
					} finally {
						console.log('SEED FARM: ' + res);
						// seedLog(csvNDVI)
					}
				});
		})
	} catch (e) {
		console.error('error: '+e)
	} finally {
	}
})()

function seedLog(csvpath) {
	const rl = readline.createInterface({
	  input: fs.createReadStream(csvpath),
	  crlfDelay: Infinity
	});
	let ids = []
	var first = true
	rl.on('line', (line) => {
		line = line.split(/(?!\B"[^"]*),(?![^"]*"\B)/);
		if(first){
			first = false;
			ids = getIDs(line)
			console.log(ids)
			return;
		}
		let date = line.shift()
		// newLOG(date,line,ids, 'log_ndvi')
	});
}

function getIDs(row){
	let id = 0
	let ids = []
	let names = row

	names.shift()
	names.forEach((name) =>{
		id = Number(name.split('_')[1])
		ids.push(id)
	})
	return ids
}

function newLOG(date, line, ids, logkey){
	// console.log(date, line, ids)
	for (var i=0; i<ids.leng; i++){
		Farm.updateOne(
			{name_id: id[i]},
			{logkey}
		)
		// let farm = Farm.findOne({farm_id: id[i]})
		// console.log(farm.log_ndvi.push({date: line[i]}))
	}
}

// async function seed(){
// 	try{
// 		await Promise.all([
// 			Farm.deleteMany({})
// 				.then(res =>console.log('DELETE FARMS' + res)),
// 			Ndvi.deleteMany({})
// 				.then(res =>console.log('DELETE NDVI' + res)),
// 		]);
// 		await new Promise((resolve,reject) => {
// 			seedFarm()
// 		})
// 	} catch (e) {
// 		console.error('error: '+e)
// 	} finally {
// 	}
// };

// async function seedFarm() {
// 	csv.fromStream(farmStream, {headers:true})
// 	    .on('data', (data) => {
// 			// data.log_ndvi = []
//   			// data.log_precipitation = []
// 	      	let farm = new Farm(data)
// 			const newFarm = await farm.save((err)=>console.log(err))
// 		  	console.log(newFarm === farm)
// 	    })
// 	    .on('end', (res) => {
// 			console.log('SEED FARM: ' + res);
// 			// seedLog(csvNDVI)
// 		});
// }




//
