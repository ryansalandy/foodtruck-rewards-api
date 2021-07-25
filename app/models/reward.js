const mongoose = require('mongoose')

const rewardSchema = new mongoose.Schema({
  truck: {
    type: String,
    required: true
  },
  rating: {
    type: String,
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
