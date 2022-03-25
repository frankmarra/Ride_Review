import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Review = () => {
  const [ride, setRide] = useState('')
  const [userName, setUsername] = useState('')
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')

  const { rideId } = useParams()

  useEffect(() => {
    setRide(rideId)
  }, [])

  const handleUsernameChange = (e) => {
    e.preventDefault()
    setUsername(e.target.value)
  }

  const handleRatingChange = (e) => {
    e.preventDefault()
    // if (typeof e.target.value === Number) {
    //   setRating(e.target.value)
    // }
    setRating(e.target.value)
  }

  const handleReviewChange = (e) => {
    e.preventDefault()
    setReview(e.target.value)
  }

  const handleOnSubmit = async (e) => {
    const packagedPayLoad = {
      userName: userName,
      ride: ride,
      rating: rating,
      review: review
    }
    console.log(packagedPayLoad)
    e.preventDefault()
    axios
      .post(`http://localhost:3001/api/rides/${ride}`, packagedPayLoad)
      .catch((err) => console.log(err))
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Username:
        <input
          onChange={handleUsernameChange}
          type="text"
          name="username"
          //value="userName"
        />
      </label>
      <label>
        Rate out of 5:
        <input
          onChange={handleRatingChange}
          type="text"
          name="rating"
          //value="rating"
        />
      </label>
      <label>
        Leave a review:
        <input
          onChange={handleReviewChange}
          type="text"
          name="review"
          //value="review"
        />
      </label>
      <button type="submit">Submit review</button>
    </form>
  )
}

export default Review
