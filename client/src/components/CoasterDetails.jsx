import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CoasterDetails = () => {
  const [selectedCoaster, setSelectedCoaster] = useState(useParams())
  const [coasterDetails, setCoasterDetails] = useState('')
  const [location, setLocation] = useState('')

  const getCoasterDetails = async () => {
    const response = await axios.get(`http://localhost:3001/api/rides/${selectedCoaster.coasterId}`)
    setCoasterDetails(response.data.ride)
    const locationResponse = await axios.get(`http://localhost:3001/api/locations/${response.data.ride.location}`)
    setLocation(locationResponse.data.location.name)
  }

  useEffect(() => {
    getCoasterDetails()
  }, [])

  let navigate = useNavigate()

  const leaveReview = (rideId) => {
    navigate(`/review/${rideId}`)
  }

  return (
    <div className="coaster-content">
      <section className="image-container">
        <div>
          <img className="descriptionImg" src={coasterDetails.image} alt="image" />
        </div>
      </section>
      <section className="details">
        <div>
          <h3>{coasterDetails.name}</h3>
          <p>{coasterDetails.name} is a {coasterDetails.type} roller coaster at {location}.
          It is {coasterDetails.height} feet tall and reaches a speed of {coasterDetails.speed} mph!</p>
        </div>
      </section>
      <button onClick={() => leaveReview(selectedCoaster.coasterId)}>Submit Review</button>
    </div>
  )
}

export default CoasterDetails