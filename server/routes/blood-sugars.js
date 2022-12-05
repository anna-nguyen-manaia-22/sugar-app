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
  db.addBS(data)
    .then((results) => results[0])
    .then((id) => db.getBsById(id))
    .then((result) => res.json(result))
    .catch((err) => apiError(err, res))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteBS(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const editedBS = req.body
  db.editBS(id, editedBS)
    .then((result) => res.json(result))
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
