// https://stackoverflow.com/questions/50343116/import-csv-using-mongoose-schema
// https://www.freecodecamp.org/news/create-a-fullstack-react-express-mongodb-app-using-docker-c3e3e21c4074/
// https://www.robinwieruch.de/mongodb-express-setup-tutorial/
// https://hackernoon.com/how-to-develop-a-boilerplate-for-api-with-node-js-express-and-mongodb-4c771ae1c2df
// https://getstream.io/blog/building-a-node-js-powered-api-with-express-mongoose-mongodb/
// https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
// https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/

// const mongoose = require('mongoose');
//
// // get env mongo url string
// const uri = process.env.MONGODB_URL || 'mongodb://db:27017/test'
//
// // object to connect to db
// const connectDB = () => {
// 	// return mongoose.connect(process.env.DATABASE_URL)
// 	return mongoose.connect(uri,  {useNewUrlParser: true })
// };
//
// const eraseDatabaseOnSync = true;
//
// connectDB().then(async () => {
// 	// if (eraseDatabaseOnSync) {
// 	// 	await Promise.all([
// 	// 		Farm.deleteMany({})
// 	// 		.then(res =>{console.log(res)}),
// 	// 		// ,models.NDVI.deleteMany({})
// 	// 	]);
// 	// }
// 	console.log('database connected')
// 	// seed()
// });
//
// // const models = { Farm, Ndvi };
//
// // export { connectDB, seedDB }
//
// // export default models;
//
// module.exports = connectDB
