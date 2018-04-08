// const mongoLab = require('../../../../secret/mongoLab.js')
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// const mlabkey = process.env.MLABKEY || mongoLab.mLab
const mlabkey = process.env.MLABKEY || require('../../../../secret/mongoLab.js').mLab
mongoose.connect(`mongodb://${mlabkey}.mlab.com:27199/todoapp`);

module.exports = {mongoose};

//Same as this:
// module.exports = {
//   mongoose: mongoose
// };
