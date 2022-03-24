const { Ride, Location, Review } = require('../models/index')

const createRide = async (req, res) => {
  try {
    const ride = await new Ride(req.body)
    await ride.save()
    return res.status.json({
      ride
    })
  } catch (error) {
    return res.status.json({ error: error.message })
  }
}

const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find()
    return res.status(200).json({ rides })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRide = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.id)
    if (ride) {
      return res.status(200).json({ ride })
    }
    return res.status(404).send('Ride with specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id)
    if (location) {
      return res.status(200).json({ location })
    }
    return res.status(404).send('Location with speficied ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    return res.status(201).json({ review })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
    reviews.filter((review) => (ride = req.body.ride))
    if (reviews) {
      return res.status(200).json({ reviews })
    }
    return res.status(404).send('Reviews for this ride do not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createRide,
  getAllRides,
  getRide,
  getLocation,
  createReview,
  getReviews
}
