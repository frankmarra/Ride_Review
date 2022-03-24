const { Schema } = require('mongoose')

const Review = new Schema(
  {
    userName: { type: String, required: true },
    ride: { type: Schema.Types.ObjectId, ref: 'Ride' },
    rating: { type: String, required: true },
    review: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Review
