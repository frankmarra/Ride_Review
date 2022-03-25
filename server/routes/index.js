const { Router } = require('express')
const controllers = require('../controllers/RideController')
const router = Router()

router.get('/', (req, res) => res.send('This is root'))

router.get('/rides', controllers.getAllRides)

router.get('/locations/rides/:id', controllers.getRidesByPark)

router.get('/rides/:id', controllers.getRide)

router.post('/rides/:id', controllers.createReview)

router.get('/locations', controllers.getAllLocations)

router.get('/locations/:id', controllers.getLocation)

router.get('/rides/reviews/:id', controllers.getReviews)

module.exports = router
