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
//===================== CREATE ACTIVITY ================

app.post('/activity', urlencodedParser, function (req, res) {

      var newActivity = new Activity({
          name:req.body.name,
          cost: req.body.cost,
          location: req.body.location,
          duration : req.body.duration
      });
      console.log(newActivity);
      res.end(JSON.stringify(newActivity));

        newActivity.save(function(err) {
        if (err) throw err;

        console.log('Activity saved successfully!');
    });
})

//===================== GET ALL ACTIVITIES ===============

app.get('/all_activities' , function(req , res){
  Activity.find({}, function(err, activities) {
     if (err) throw err;
     res.end(JSON.stringify(activities));
   });
})

// //=============== UPDATE QUOTE ===================
//
// app.post('/update', urlencodedParser, function (req, res) {
//
//     var updateAcitvity = {
//         name:req.body.name,
//         cost: req.body.cost,
//         location: req.body.location,
//         duration : req.body.duration
//   };
//   //var_id = mongoose.Types.ObjectId(req.body.id);
//           Activity.findByIdAndUpdate( quote_id , updateQuote ,  function(err , quote){
//                 if(err){
//                       throw err  ;
//                 }
//                 console.log('Quote updated successfully!');
//           });
//           res.redirect('/')
// })
//================== DELETE QUOTE ====================

// app.post('/delete' , urlencodedParser ,  function( req , res){
//
//         var quote_id = mongoose.Types.ObjectId(req.body.id);
//         Quote.findById(quote_id , function(err , quote){
//                   if(err) throw err ;
//
//                   quote.remove(function(err){
//                       if ( err) {
//                           throw err;
//                       }
//                       console.log('Quote deleted successfully!');
//                   })
//         });
//         res.redirect('/')
// });
// =================== EVENT LISTENER =============================
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Application listening at http://%s:%s", host, port)
})
