var express = require('express');
var path = require('path');
//router object
var router = express.Router();
//route
//export our router
module.exports =router;

var index = require('./routes/index');
var execom =require('./routes/execom');
var events =require('./routes/events');
var about =require('./routes/about');
router.use('/', index);
router.use('/about',about);
router.use('/events',events);
router.use('/execom',execom);
// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
//error page
router.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.router.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
router.get('/', function(req, res) {
    res.render('pages/index');
});
