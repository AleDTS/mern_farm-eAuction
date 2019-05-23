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

/*
SomeModel.create({ name: 'also_awesome' }, function (err, awesome_instance) {
  if (err) return handleError(err);
  // saved!
});

var Athlete = mongoose.model('Athlete', yourSchema);

// find all athletes who play tennis, selecting the 'name' and 'age' fields
Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
  if (err) return handleError(err);
  // 'athletes' contains the list of athletes that match the criteria.
})

// Virtual for author's lifespan
AuthorSchema
.virtual('lifespan')
.get(function () {
  return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});

// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () {
  return '/catalog/author/' + this._id;
});


Athlete.
  find().
  where('sport').equals('Tennis').
  where('age').gt(17).lt(50).  //Additional where query
  limit(5).
  sort({ age: -1 }).
  select('name age').
  exec(callback); // where callback is the name of our callback function.
*/

const Farm = mongoose.model('Farm', FarmSchema);
// export default User;

module.exports = Farm;
