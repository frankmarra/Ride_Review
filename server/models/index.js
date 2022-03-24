const mongoose = require('mongoose')
const RideSchema = require('./Ride')
const LocationSchema = require('./Location')
const ReviewSchema = require('./Review')

const Ride = mongoose.model('rides', RideSchema)
const Location = mongoose.model('locations', LocationSchema)
const Review = mongoose.model('reviews', ReviewSchema)

module.exports = {
  Ride,
  Location,
  Review
}