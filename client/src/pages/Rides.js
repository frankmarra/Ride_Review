import { useState, useEffect } from 'react'
import RideCard from '../components/RideCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Rides = () => {
  const [rides, setRides] = useState([])
  useEffect(() => {
    document.title = 'Roller Coaster Round Up'
  })
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
      <h2>All of the coasters!</h2>
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

export default Rides
