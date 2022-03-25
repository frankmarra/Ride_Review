import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Carowinds">Carowinds</Link>
        <Link to="/Great_Adventure">Great Adventure</Link>
        <Link to="/Valleyfair">Valleyfair!</Link>
        <Link to="/Cedar_Point">Cedar Point</Link>
      </nav>
    </header>
  )
}

export default Header
