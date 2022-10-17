const connection = require('./connection')

function getBloodSugars(db = connection) {
  return db('blood_sugar_values').select()
}

module.exports = {
  getBloodSugars,
}
