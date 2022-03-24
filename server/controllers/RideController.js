const { Ride } = require('../models/index')

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

module.exports = {
  createRide,
  getAllRides,
  getRide
}
