
const express = require('express')
const passport = require('passport')

const Reward = require('../models/reward')

const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// Create Route
router.post('/rewards', requireToken, (req, res, next) => {
  console.log('made it to create api')
  req.body.reward.owner = req.user.id
  Reward.create(req.body.reward)
    .then(reward => {
      res.status(201).json({ reward: reward.toObject() })
    })
    .catch(next)
})

// Index Route
router.get('/rewards', requireToken, (req, res, next) => {
  Reward.find()
    .then(rewards => {
      return rewards.map(reward => reward.toObject())
    })
    .then(rewards => res.status(200).json({ rewards: rewards }))
    .catch(next)
})

// Show Route
router.get('/rewards/:id', requireToken, (req, res, next) => {
  Reward.findById(req.params.id)
    .then(handle404)
    .then(reward => res.status(200).json({ reward: reward.toObject() }))
    .catch(next)
})

// Update Route
router.patch('/rewards/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.reward.owner
  Reward.findById(req.params.id)
    .then(handle404)
    .then(reward => {
      console.log(reward)
      requireOwnership(req, reward)
      return reward.updateOne(req.body.reward)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// Delete Route
router.delete('/rewards/:id', requireToken, (req, res, next) => {
  Reward.findById(req.params.id)
    .then(handle404)
    .then(reward => {
      requireOwnership(req, reward)
      reward.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
