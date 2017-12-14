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

app.get('/', (req, res) => {
        res.sendFile(__dirname + '/' +'index.html');
})
//===================== CREATE ACTIVITY ================

app.post('/activity', urlencodedParser, (req, res) => {

      var newActivity = new Activity({
          name:req.body.name,
          cost: req.body.cost,
          location: req.body.location,
          duration : req.body.duration
      });
      console.log(newActivity);
      res.end(JSON.stringify(newActivity));

        newActivity.save((err) => {
        if (err) throw err;

        console.log('Activity saved successfully!');
    });
})

//===================== GET ALL ACTIVITIES ===============

app.get('/all_activities' , (req , res) => {
  Activity.find({},(err, activities) => {
     if (err) throw err;
     res.end(JSON.stringify(activities));
   });
})

//======================= SORT WITH CATERGORY ================

app.post('/catergory' , urlencodedParser ,  (req , res) => {
          var catergory = req.body.value ;
})
// =================== EVENT LISTENER =============================
var server = app.listen(8081,() => {
   var host = server.address().address
   var port = server.address().port

   console.log("Application listening at http://%s:%s", host, port)
})
