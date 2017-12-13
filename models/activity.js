var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitySchema = new Schema({
  name: String,
  cost:Number,
  location : String ,
  duration : Number
});
var Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;
