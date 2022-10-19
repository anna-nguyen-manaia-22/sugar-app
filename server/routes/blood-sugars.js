const express = require('express')
const db = require('../db/db')

const router = express.Router()

const apiError = (err, res) => res.status(500).json({ message: err.message })

router.get('/', (req, res) => {
  db.getBloodSugars()
    .then((results) => {
      res.json(results)
      return null
    })
    .catch((err) => apiError(err, res))
})

router.post('/', (req, res) => {
  const data = req.body
  console.log('post payload', data)
  db.addBS(data)
    .then((results) => results[0])
    .then((id) => db.getBsById(id))
    .then((result) => res.json(result))
    .catch((err) => apiError(err, res))
})

module.exports = router
