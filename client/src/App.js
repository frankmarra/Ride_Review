import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Review from './pages/Review'
import Ride from './pages/Rides'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Rides />} />
          <Route path="/form" element={<Review />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
