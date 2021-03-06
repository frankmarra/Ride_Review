import { useState, useEffect } from 'react'
import RideCard from '../components/RideCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const GreatAdventure = () => {
  const [location, setLocation] = useState()
  const [rides, setRides] = useState([])
  useEffect(() => {
    document.title = 'Great Adventure'
  })
  useEffect(() => {
    const getAllLocations = async () => {
      const response = await axios.get('http://localhost:3001/api/locations')
      setLocation(response.data.locations[1]._id)
    }
    getAllLocations()
  }, [])
  useEffect(() => {
    const getRidesByPark = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/locations/rides/${location}`
      )
      setRides(response.data.parkCoasters)
    }
    getRidesByPark()
  }, [location])

  let navigate = useNavigate()

  const showCoaster = (coasterId) => {
    navigate(`/coaster/details/${coasterId}`)
  }

  return (
    <div>
      <h2>Rides At Great Adventure</h2>
      <section className="container">
        <div className="wrapper">
          {rides.map((ride) => (
            <div key={ride._id}>
              <RideCard
                name={ride.name}
                image={ride.image}
                onClick={() => showCoaster(ride._id)}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default GreatAdventure
