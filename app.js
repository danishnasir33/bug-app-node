const express = require('express')
const app = express()
const logger = require('morgan')
const createError = require('http-errors')
const cors = require('cors')

// Middleware, routes, and other configurations go here
const routes = require('./routes')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/', routes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app