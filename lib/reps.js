var request = require('superagent');

exports.allByZip = function(zip, callback) {
  request
    .get('http://whoismyrepresentative.com/getall_mems.php?zip=' + zip + '&output=json')
    .end(function(err, res){
      if (err) return callback(err);
      callback(null, JSON.parse(res.text).results);
    }
)};

exports.repsByName = function(name, callback) {
request
  .get('http://whoismyrepresentative.com/getall_reps_byname.php?name=' + name + '&output=json')
  .end(function(err, res){
    if (err) return callback(err);
    callback(null, JSON.parse(res.text).results);
  }
)};

exports.repsByState = function(state, callback) {
  request
    .get('http://whoismyrepresentative.com/getall_reps_bystate.php?state=' + state + '&output=json')
    .end(function(err, res){
      if (err) return callback(err);
      callback(null, JSON.parse(res.text).results);
    }
  )};

exports.sensByName = function(name, callback) {
  request
    .get('http://whoismyrepresentative.com/getall_sens_byname.php?name=' + name + '&output=json')
    .end(function(err, res){
      if (err) return callback(err);
      callback(null, JSON.parse(res.text).results);
    }
  )};

exports.sensByState = function(state, callback) {
  request
    .get('http://whoismyrepresentative.com/getall_sens_bystate.php?state=' + state + '&output=json')
    .end(function(err, res){
      if (err) return callback(err);
      callback(null, JSON.parse(res.text).results);
    }
  )};
