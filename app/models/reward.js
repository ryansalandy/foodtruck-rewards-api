const mongoose = require('mongoose')

const rewardSchema = new mongoose.Schema({
  points: {
    type: Number,
    min: 0,
    max: 25,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Reward', rewardSchema)
