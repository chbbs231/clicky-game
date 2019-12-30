import React from 'react'

const NavBar = props => {
  return (
    // --- Navbar ---
    <nav className="navbar navbar-expand-md navbar-dark primary-color">

      {/* Navbar Brand */}
      <span className="navbar-brand">Clicky</span>

      {/* Collapse Button */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMenu" aria-controls="navMenu" aria-expand="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible Content */}
      <div className="collapse navbar-collapse" id="navMenu">

        {/* Links */}
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>

      </div>
    </nav>
  )
}