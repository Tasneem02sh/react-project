import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.png'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => setToggle(toggle)
  return (
    <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light'>
    <div className='container-fluid'>
      <div className='navbar-brand'>
        <img src={logo} alt="Logo" width="70px" height="100px" />
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

      <div className='flex items-center'>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Platform</li>
          <li className="nav-item">Pricing</li>
          <li className="nav-item">About</li>
        </ul>
      </div>

      <form className="d-flex gap-2">
        <button className='btn btn-outline-secondary'>Login</button>
        <button className='btn btn-outline-secondary'>Sign Up</button>

      </form>



    </div>

  </nav>
  );
}

export default Navbar;
