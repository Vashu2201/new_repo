import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='navbar navbar-light bg-dark justify-content-between text-decoration-none'>
          <NavLink className='px-5 fs-5 fw-bold text-capitalize text-light text-decoration-none nav-link'  to='/'>Home</NavLink>
          <NavLink className='px-5 fs-5 fw-bold text-capitalize text-light text-decoration-none nav-link'  to='/about'>About</NavLink>
          <NavLink className='px-5 fs-5 fw-bold text-capitalize text-light text-decoration-none nav-link'  to='/services'>Services</NavLink>
          <NavLink className='px-5 fs-5 fw-bold text-capitalize text-light text-decoration-none nav-link'  to='/contact'>Contact</NavLink>
      </nav>
    </>
  )
}

export default Navbar;
