const { Schema } = require('mongoose')

const Review = new Schema(
  {
    name: {type: String, required: true },
    rating: {type: Integer, required: true},
    review: {type: String, required: true}
  },
  { timestamps: true }
)

module.exports = Review