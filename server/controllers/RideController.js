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

const getRidesByPark = async (req, res) => {
  try {
    const rides = await Ride.find()
    let parkCoasters = []
    rides.forEach((ride) => {
      if (ride.location[0]._id == req.params.id) {
        parkCoasters.push(ride)
      }
    })
    if (parkCoasters) {
      return res.status(200).json({ parkCoasters })
    }
    return res.status(404).send('Reviews for this ride do not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find()
    return res.status(200).json({ locations })
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
    return res.status(404).send('Location with specified ID does not exist')
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
    let coasterReviews = []

    reviews.forEach((review) => {
      if (review.ride._id == req.params.id) {
        coasterReviews.push(review)
      }
    })
    if (coasterReviews) {
      return res.status(200).json({ coasterReviews })
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
  getRidesByPark,
  getAllLocations,
  getLocation,
  createReview,
  getReviews
}
