
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='Navbar'>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
        <Link to="/feedback">Feedback</Link>

    </nav>
    </div>
  )
}

export default Nav;
