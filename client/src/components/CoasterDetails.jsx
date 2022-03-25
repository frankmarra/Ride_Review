import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CoasterDetails = () => {
  const [selectedCoaster, setSelectedCoaster] = useState(useParams())
  const [coasterDetails, setCoasterDetails] = useState('')
  const [location, setLocation] = useState('')
  const [reviews, setReviews] = useState([])
  const [averageRating, setAverageRating] = useState(0)

  const getCoasterDetails = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/rides/${selectedCoaster.coasterId}`
    )
    setCoasterDetails(response.data.ride)
    const locationResponse = await axios.get(
      `http://localhost:3001/api/locations/${response.data.ride.location}`
    )
    setLocation(locationResponse.data.location.name)
  }

  const getReviews = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/rides/reviews/${selectedCoaster.coasterId}`
    )
    setReviews(response.data.coasterReviews)
    getAverageRating(response.data.coasterReviews)
  }

  const getAverageRating = (reviews) => {
    if (reviews.length !== 0) {
      let total = 0
      for (let i = 0; i < reviews.length; i++) {
        total += parseInt(reviews[i].rating)
      }
      setAverageRating(total / reviews.length)
    } else {
      setAverageRating(0)
    }
  }

  useEffect(() => {
    getCoasterDetails()
    getReviews()
  }, [])

  let navigate = useNavigate()

  const leaveReview = (rideId) => {
    navigate(`/review/${rideId}`)
  }

  return (
    <div className="coaster-content">
      <section className="image-container">
        <div>
          <img
            className="descriptionImg"
            src={coasterDetails.image}
            alt="image"
          />
        </div>
      </section>
      <section className="details">
        <div>
          <h3>{coasterDetails.name}</h3>
          <p>{coasterDetails.name} is a {coasterDetails.type} roller coaster at {location}.
          It is {coasterDetails.height} tall and reaches a speed of {coasterDetails.speed}!</p>
        </div>
      </section>
      <div>
        {reviews.length !== 0 ? <h3>Average rating: {averageRating}</h3> : <h3>No reviews yet</h3>}
        {reviews.length !== 0 && <h3>Reviews</h3>}
        {reviews.map((review) => (
          <p key={review._id}>
            {review.userName} gives this ride a {review.rating} and says:{' '}
            {review.review}
          </p>
        ))}
      </div>
      <button onClick={() => leaveReview(selectedCoaster.coasterId)}>
        Submit Review
      </button>
    </div>
  )
}

export default CoasterDetails
