import "./Navbar.css"

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        {/* loading a new component */}
        {/* spa - behavior */}
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
    </nav>
  )
}

export default Navbar