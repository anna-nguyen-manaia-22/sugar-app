import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/list-bs">My sugar list</Link>
      <br />
      <Link to="/add-BS">Add Blood Sugar Record</Link>
    </nav>
  )
}

export default Nav
