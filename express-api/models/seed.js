const csv = require('fast-csv');
const fs = require('fs');
const GeoJSON = require('geojson');
const EventEmitter = require('events');
const mongoose = require('mongoose');
const readline = require('readline');

// import models;
let Farm = require('./farm');
let LogNDVI = require('./ndvi');

// import csv public file
const pubDir = __dirname+'/../public/data/'
const csvFarm = pubDir+'farms.csv';
const csvNDVI = pubDir+'farms_ndvi.csv';

(async() =>{
	try{
		await Promise.all([
			Farm.deleteMany({}),
			LogNDVI.deleteMany({}),
		]);
		await seedFarm(await csv2obj(csvFarm));
		await seedLog(await csv2obj(csvNDVI));
		await seedGeoJ();
	} catch (e) {
		console.log(e)
	}
})()

// Seed farms to db from public/data/farms.csv
async function seedFarm(buffer) {
	try{
		Farm.insertMany(buffer, (err,docs) => {
			if (err) console.log('ERROR: '+err)
		})
	}catch (e){
		console.log('error: ' + e)
	} finally {
		console.log('SEED FARMS');
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
						).then(doc => {})
							.catch(err => {	return err })
						stream.resume();
					}).on('end', async (res) => {
						resolve();
	 				});
			})
		});
	}catch (e){
		console.log('error: ' + e)
	} finally {
		console.log('SEED GEOJ');
	}
}

async function seedLog(buffer){
	try{
		const keys = Object.keys(buffer[0]);
		keys.shift()

		keys.forEach((farm) => {
			const id = farm.match(/\d+/)[0];
			let newLog = new LogNDVI();
			buffer.forEach((log) => {
				newLog.log_ndvi.push({
					date: log['date'],
					value: log[farm].replace(',','.')
				})
			})
			newLog.save();

			Farm.updateOne(
				{farm_id: id},
				{log_ndvi: newLog._id}
				// {safe: true, upsert: true}
			).then((res) => {})
		})
	}catch (e){
		console.log('error: ' + e)
	} finally {
		console.log('SEED LOG');
	}
}

// https://stackoverflow.com/questions/50343116/import-csv-using-mongoose-schema
async function csv2obj(csvpath){
	let buffer = []
	try{
		await new Promise((resolve,reject) => {
			let stream = fs.createReadStream(csvpath)
				.pipe(csv({headers: true}))
				.on('error', reject)
			    .on('data', async (data) => {
					stream.pause();
					buffer.push(data);
					stream.resume();
			    })
			    .on('end', async (res) => {
					resolve();
				});
		});
	}catch (e){
		console.log('error: ' + e)
		return null;
	} finally {
		return buffer;
	}
	return null;
}
