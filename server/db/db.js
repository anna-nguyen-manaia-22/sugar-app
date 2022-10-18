const connection = require('./connection')

function getBloodSugars(db = connection) {
  return db('blood_sugar_values').select()
}

function addBS(data, db = connection) {
  return db('blood_sugar_values').insert(data)
}

module.exports = {
  getBloodSugars,
  addBS,
}
