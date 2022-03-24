const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ride = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    design: { type: String, required: true },
    location: [{ type: Schema.Types.ObjectId, ref: 'Location' }],
    height: { type: String, required: false },
    speed: { type: String, required: false },
    image: { type: String, required: false },
    review: [{ type: Schema.Types.ObjectId, ref: 'Review', required: false }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('rides', Ride)
