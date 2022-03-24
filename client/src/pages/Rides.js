import { useState, useEffect } from 'react'
import RideCard from '../components/RideCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Rides = () => {
  const [rides, setRides] = useState([])

  useEffect(() => {
    const getRides = async () => {
      const response = await axios.get('http://localhost:3001/api/rides')
      setRides(response.data.rides)
    }
    getRides()
  }, [])

  let navigate = useNavigate()

  const showCoaster = (coasterId) => {
    navigate(`/coaster/details/${coasterId}`)
  }

  return (
    <div>
      <h2>Rides</h2>
      <section className="container-grid">
        {rides.map((ride) => (
          <div key={ride._id}>
            <RideCard
              name={ride.name}
              image={ride.image}
              onClick={() => showCoaster(ride._id)}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Rides
