var env = process.env.NODE_ENV || 'development'
console.log("Env ****", env)

if(env === 'development') {
  process.env.MLABKEY = require('../../../../secret/mongoLab.js').mLabLocal
} else if (env === 'test') {
  process.env.MLABKEY = require('../../../../secret/mongoLab.js').mLabTest
}