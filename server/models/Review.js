const { Schema } = require('mongoose')

const Review = new Schema(
  {
    userName: { type: String, required: true },
    coasterName: { type: String, required: true },
    rating: { type: String, required: true },
    review: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Review
