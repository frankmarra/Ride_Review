import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Review from './pages/Review'
import Rides from './pages/Rides'
import CoasterDetails from './components/CoasterDetails'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Rides />} />
          <Route path="/form" element={<Review />} />
          <Route
            path="/coaster/details/:coasterId"
            element={<CoasterDetails />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
