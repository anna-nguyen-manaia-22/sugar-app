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

function deleteBS(id, db = connection) {
  return db('blood_sugar_values').delete().where('id', id)
}

function editBS(id, newBS, db = connection) {
  // const { date, time, bs_value, note } = data

  return db('blood_sugar_values')
    .update({
      date: newBS.date,
      time: newBS.time,
      bs_value: newBS.bs_value,
      note: newBS.note,
    })
    .where('id', id)
    .then(() => getBsById(id, db))
}
module.exports = {
  getBloodSugars,
  addBS,
  getBsById,
  deleteBS,
  editBS,
}
