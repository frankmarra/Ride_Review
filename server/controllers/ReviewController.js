const Review = require('../models/Review')

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    return res.status.json({
      review
    })
  } catch (error) {
    return res.status.json({ error: error.message })
  }
}

module.exports = createReview
