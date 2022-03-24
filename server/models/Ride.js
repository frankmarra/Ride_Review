const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ride = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    location: [{ type: Schema.Types.ObjectId, ref: 'Location' }],
    duration: { type: Integer, required: true },
    image: { type: String, requird: true },
    review: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  },
  { timestamps: true }
)

module.exports = Ride
