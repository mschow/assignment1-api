var reps = require('./lib/reps');

console.log(reps);

reps.allByZip('84043', function(err, results) {
  if (err) return console.log(err);
  console.log(results);
});
