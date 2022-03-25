import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Review = () => {
  const [ride, setRide] = useState('')
  const [userName, setUsername] = useState('')
  const [rating, setRating] = useState('')
  const [review, setReview] = useState('')

  const { rideId } = useParams()
  useEffect(() => {
    document.title = 'Review'
  })
  useEffect(() => {
    setRide(rideId)
  }, [])

  const handleUsernameChange = (e) => {
    e.preventDefault()
    setUsername(e.target.value)
  }

  const handleRatingChange = (e) => {
    if (
      !isNaN(parseInt(e.target.value)) &&
      parseInt(e.target.value) <= 5 &&
      parseInt(e.target.value) >= 0
    ) {
      e.preventDefault()
      setRating(e.target.value)
    }
  }

  const handleReviewChange = (e) => {
    e.preventDefault()
    setReview(e.target.value)
  }

  let navigate = useNavigate()

  const handleOnSubmit = async (e) => {
    if (userName !== '' && rating !== '' && review !== '') {
      const packagedPayLoad = {
        userName: userName,
        ride: ride,
        rating: rating,
        review: review
      }
      e.preventDefault()
      axios
        .post(`http://localhost:3001/api/rides/${ride}`, packagedPayLoad)
        .catch((err) => console.log(err))
      navigate(`/coaster/details/${ride}`)
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Username:
        <input onChange={handleUsernameChange} type="text" name="username" />
      </label>
      <label>
        Rate out of 5:
        <input onChange={handleRatingChange} type="text" name="rating" />
      </label>
      <label>
        Leave a review:
        <input onChange={handleReviewChange} type="text" name="review" />
      </label>
      <button type="submit">Submit review</button>
    </form>
  )
}

export default Review
