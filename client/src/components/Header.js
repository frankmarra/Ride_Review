import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="drop-button">Parks</button>
          <div className="drop-down-links">
            <Link to="/Carowinds">Carowinds</Link>
            <Link to="/Great_Adventure">Great Adventure</Link>
            <Link to="/Valleyfair">Valleyfair!</Link>
            <Link to="/Cedar_Point">Cedar Point</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
