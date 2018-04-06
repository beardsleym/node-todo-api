const mongoLab = require('../../../../secret/mongoLab.js')
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${mongoLab.mLab}.mlab.com:27199/todoapp`);

module.exports = {mongoose};

//Same as this:
// module.exports = {
//   mongoose: mongoose
// };
