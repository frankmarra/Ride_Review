const { Router } = require('express')
const controllers = require('../controllers/RideController')
const router = Router()

router.get('/', (req, res) => res.send('This is root'))

router.get('/rides', controllers.getAllRides)

router.get('/rides/:id', controllers.getRide)

router.get('/locations/:id', controllers.getLocation)

router.post('/rides/:id', controllers.createReview)

router.get('/rides/:id/reviews', controllers.getReviews)

module.exports = router
