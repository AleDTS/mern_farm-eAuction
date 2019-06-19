var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

let app = express();

//app setup
//=============================================================================
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Routes
//=============================================================================
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let apiRouter = require("./routes/api");

// const routes = express.Router();
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api", apiRouter);

// Error
//=============================================================================
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Database
//=============================================================================
let mongoose = require('mongoose');
const uri = process.env.MONGODB_URL || 'mongodb://db:27017/app'

mongoose.connect(uri,  {useNewUrlParser: true })
	.then(res => {
		console.log('DATABASE CONNECTED: '+res);

		// Seed initial data at public/data to db
		require('./models/seed')
	})

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Exports
//=============================================================================
module.exports = app;
