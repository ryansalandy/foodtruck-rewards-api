const mongoose = require('mongoose')

const truckSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
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

module.exports = mongoose.model('Truck', truckSchema)
