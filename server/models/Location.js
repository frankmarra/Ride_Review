const { Schema } = require('mongoose')

const Location = new Schema(
  {
    name: {type: String, required: true},
    address: {type: String, required: true},
    rides: {type: Schema.Types.ObjectId, ref: 'Ride'}
  },
  {timestamps: true}
)

model.exports = Location