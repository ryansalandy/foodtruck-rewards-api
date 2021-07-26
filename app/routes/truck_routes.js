const express = require('express')
const passport = require('passport')

const Truck = require('../models/truck')

const customErrors = require('../../liv/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// IDEX/GET
router.get('/trucks', requireToken, (req, res, next) => {
  Truck.find()
    .then(trucks => {
      return trucks.map(truck => truck.toObject())
    })
    .then(trucks => res.status(200).json({ trucks: trucks }))
    .catch(next)
})

// CREATE/POST
router.post('/trucks', requireToken, (req, res, next) => {
  req.body.truck.owner = req.user.id
  Truck.create(req.body.truck)
    .then(truck => {
      res.status(201).json({ truck: truck.toObject() })
    })
    .catch(next)
})

// UPDATE/PATCH
router.patch('/trucks/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.truck.owner
  Truck.findById(req.params.id)
    .then(handle404)
    .then(truck => {
      requireOwnership(req, truck)
      return truck.updateOne(req.body.truck)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY/DELETE
router.delete('trucks/:id', requireToken, (req, res, next) => {
  Truck.findById(req.params.id)
    .then(handle404)
    .then(truck => {
      requireOwnership(req, truck)
      truck.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
