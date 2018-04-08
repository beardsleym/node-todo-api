// Made require statement as part of if statement as can't load /secret on heroku
// const mongoLab = require('../../../../secret/mongoLab.js')
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mlabkey = process.env.MLABKEY || require('../../../../secret/mongoLab.js').mLabLocal

mongoose.connect(`mongodb://${mlabkey}`);

module.exports = {mongoose};

//Same as this:
// module.exports = {
//   mongoose: mongoose
// };
