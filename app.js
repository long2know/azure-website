var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

var http = require('http');
var port = process.env.port || 8080;
http.createServer(function (req, res) {
    var reqUrl = req.url.toString();
    var customerAllRegex = new RegExp("/api/customer", "i");
    var customerSingleRegex = new RegExp("/api/customer/(\\d+)", "i");
    var customerAddressRegex = new RegExp("/api/customer/(\\d+)/address", "i");
    if (reqUrl.match(customerAddressRegex)) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('You requested a customer\'s address');
    } else if (reqUrl.match(customerSingleRegex)) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('You requested a single customer');
    } else if (reqUrl.match(customerAllRegex)) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('You requested all customers');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error!');
    }
}).listen(port);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


// module.exports = app;
