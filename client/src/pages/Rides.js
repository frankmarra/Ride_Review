import { useState, useEffect } from 'react'
import RideCard from '../components/RideCard'

const Rides = () => {
  const [rides, setRides] = useState([])

  const getRides = async () => {
    const response = await axios.get('http://localhost:3001')
    setRides(response)
  }

  useEffect(() => {
    getRides()
  })

  return (
    <div>
      <h2>Rides</h2>
      <section className="container-grid">
        {rides.map((ride) => (
          <RideCard />
        ))}
      </section>
    </div>
  )
}

export default Rides
