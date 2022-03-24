const Ride = require('./models/Ride')

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

module.exports = {
  createRide
}
