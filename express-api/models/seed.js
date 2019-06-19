const csv = require('fast-csv');
const fs = require('fs');
const GeoJSON = require('geojson');
const EventEmitter = require('events');
const mongoose = require('mongoose');
const readline = require('readline');

// import models;
let Farm = require('./farm');
let Ndvi = require('./ndvi');

// import csv public file
const pubDir = __dirname+'/../public/data/'
const csvFarm = pubDir+'farms.csv';
const csvNDVI = pubDir+'farms_ndvi.csv';

(async() => {
	await seedFarm();
	await seedGeoJ();
})()

// Seed farms to db from public/data/farms.csv
// https://stackoverflow.com/questions/50343116/import-csv-using-mongoose-schema
async function seedFarm() {
	try{
		await Promise.all([
			Farm.deleteMany({}),
			Ndvi.deleteMany({}),
		]);

		await new Promise((resolve,reject) => {
			let buffer = []
			let stream = fs.createReadStream(csvFarm)
				.pipe(csv({headers: true}))
				.on('error', reject)
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
					}
				});
		})
	} catch (e) {
		console.error('error: '+e)
	} finally {
	}
}

// Seed geojson object to each correspondent farm
async function seedGeoJ(){
	try{
		await new Promise((resolve,reject) => {
			let files = fs.readdirSync(pubDir).filter(fn => fn.endsWith('.GeoJSON'));

			files.forEach((file) => {
				let id = file.match(/\d+(?=\.)/)[0];
				let stream = fs.createReadStream(pubDir+file)
					.on('error', reject)
					.on('data', (data) => {
						stream.pause();
						let gj = JSON.parse(data);
						Farm.findOneAndUpdate(
							{farm_id: id},
							{geojson: gj},
							{useFindAndModify: false}
						)
							.then(doc => {})
							.catch(err => {	return err })
						stream.resume();
					});
			})
		});
	}catch (e){
		console.log('error: ' + e)
	}
}

// function seedLog(csvpath) {
// 	const rl = readline.createInterface({
// 	  input: fs.createReadStream(csvpath),
// 	  crlfDelay: Infinity
// 	});
// 	let ids = []
// 	var first = true
// 	rl.on('line', (line) => {
// 		line = line.split(/(?!\B"[^"]*),(?![^"]*"\B)/);
// 		if(first){
// 			first = false;
// 			ids = getIDs(line)
// 			console.log(ids)
// 			return;
// 		}
// 		let date = line.shift()
// 		// newLOG(date,line,ids, 'log_ndvi')
// 	});
// }
//
// function getIDs(row){
// 	let id = 0
// 	let ids = []
// 	let names = row
//
// 	names.shift()
// 	names.forEach((name) =>{
// 		id = Number(name.split('_')[1])
// 		ids.push(id)
// 	})
// 	return ids
// }
//
// function newLOG(date, line, ids, logkey){
// 	// console.log(date, line, ids)
// 	for (var i=0; i<ids.leng; i++){
// 		Farm.updateOne(
// 			{name_id: id[i]},
// 			{logkey}
// 		)
// 		// let farm = Farm.findOne({farm_id: id[i]})
// 		// console.log(farm.log_ndvi.push({date: line[i]}))
// 	}
// }
