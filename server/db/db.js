const connection = require('./connection')

function getBloodSugars(db = connection) {
  return db('blood_sugar_values').select()
}

function addBS(data, db = connection) {
  return db('blood_sugar_values').insert(data)
}

function getBsById(id, db = connection) {
  return db('blood_sugar_values')
    .select()
    .where('id', id)
    .then((bloodSugars) => bloodSugars[0])
}

module.exports = {
  getBloodSugars,
  addBS,
  getBsById,
}
