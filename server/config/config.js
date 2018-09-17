var env = process.env.NODE_ENV || 'development'
console.log("Env ****", env)

if(env === 'development' || env === 'test') {
  var config = require('../../../../secret/config.json');
  var envConfig = config[env];
  
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}

// if(env === 'development') {
//   process.env.MLABKEY = require('../../../../secret/mongoLab.js').mLabLocal
// } else if (env === 'test') {
//   process.env.MLABKEY = require('../../../../secret/mongoLab.js').mLabTest
// }

console.log("MongoDB ****", process.env.MLABKEY)