import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CoasterDetails = () => {
  const [selectedCoaster, setSelectedCoaster] = useState(useParams())
  const [coasterDetails, setCoasterDetails] = useState('')

  const getCoasterDetails = async () => {
    const response = await axios.get(`http://localhost:3001/api/rides/${selectedCoaster.coasterId}`)
    setCoasterDetails(response.data)
  }

  useEffect(() => {
    getCoasterDetails()
  }, [])

  return (
    <div className="coaster-content">
      <section className="image-container">
        <div>
          <img src={coasterDetails.image} alt="image" />
        </div>
      </section>
      <section className="details">
        <div>
          <h3>{coasterDetails.name}</h3>
          <p>{coasterDetails.name} is a {coasterDetails.type} roller coaster at {coasterDetails.location}.
          It is {coasterDetails.height} feet tall and reaches a spped of {coasterDetails.speed} mph!</p>
        </div>
      </section>
      <button>Submit Review</button>
    </div>
  )
}

export default CoasterDetails