import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Review from './pages/Review'
import Rides from './pages/Rides'
import CoasterDetails from './components/CoasterDetails'
import Carowinds from './pages/Carowinds'
import GreatAdventure from './pages/GreatAdventure'
import Valleyfair from './pages/Valleyfair'
import CedarPoint from './pages/CedarPoint'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Rides />} />
          <Route
            path="/coaster/details/:coasterId"
            element={<CoasterDetails />}
          />
          <Route path="/review/:rideId" element={<Review />} />
          <Route path="/Carowinds" element={<Carowinds />} />
          <Route path="/Great_Adventure" element={<GreatAdventure />} />
          <Route path="/Valleyfair" element={<Valleyfair />} />
          <Route path="/Cedar_Point" element={<CedarPoint />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
