var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mongoose = require('mongoose');

var Activity = require('./models/activity');

var mongoDB = 'mongodb://njabulo:1996@ds044577.mlab.com:44577/codespace';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(express.static('public'));

// ====================== GET HOME PAGE =====================

app.get('/', function (req, res) {
        res.sendFile(__dirname + '/' +'index.html');
})

//===================== GET ALL ACTIVITIES ================

app.fin
// =================== EVENT LISTENER =============================
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Application listening at http://%s:%s", host, port)
})
