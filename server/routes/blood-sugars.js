const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getBloodSugars()
    .then((results) => {
      res.json(results)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/', (req, res) => {
  const data = req.body
  console.log('post payload', data)
  db.addBS(data)
    .then((results) => {
      res.json(results[0])
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Failed to save sugar: ' + err.message })
    })
})

module.exports = router
