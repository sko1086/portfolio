var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var moviesRouter = require('./routes/movies');
var app = express();
var bodyParser = require('body-parser')
var mysql = require('mysql');

// Connection 객체 생성 
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',   
  password: '1234',
  database: 'vue'  
});
// Connect
connection.connect(function (err) {   
  if (err) {     
    console.error('mysql connection error');     
    console.error(err);     
    throw err;   
  } 
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/api/view', function (req, res) {
  console.log("app post 시작 -------");
  console.log(req.query);
  var listNo = {"listNo":req.query.listNo};
  var query = connection.query('SELECT * FROM board WHERE ?', listNo, function (err, result) {
    if (err) {
      console.log("app post 에러 -------");
      console.error(err);
      throw err;
    }
    res.status(200).send(result);
  });
  console.log("app post 종료 -------");
});

app.post('/api/write', function (req, res) {
  var user = {
    'tag': req.query.select,
    'title': req.query.title,
    'commentNum': '0',
    'goodNum': '0',
    'viewNum': '0',
    'auth': 'sko',
    'editor': req.query.content
  };
  var query = connection.query('insert into board set ?', user, function (err, result) {
    if (err) {
      console.error(err);
      throw err;
    }
    res.status(200).send(result);
  });
});

app.post('/api/allBoard', function (req, res) {
  var query = connection.query('SELECT * FROM board', function (err, result) {
    if (err) {
      console.log("app post 에러 -------");
      console.error(err);
      throw err;
    }
    res.status(200).send(result);
  });
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/api/movies', moviesRouter);

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

module.exports = app;
