const { Router } = require('express')
const controllers = require('../controllers/RideController')
const router = Router()

router.get('/', (req, res) => res.send('This is root'))

router.get('/rides', controllers.getAllRides)

router.get('/rides/:id', controllers.getRide)

// router.post('/rides/:rideId', controllers.ReviewController)

module.exports = router
