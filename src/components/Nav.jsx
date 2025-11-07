import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <img src={require('../icons_assets/Logo.svg').default} alt="Little Lemon Logo" />
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><a href="/#about">About</a></li>
      <li><a href="/#menu">Menu</a></li>
      <li><Link to="/booking">Reservations</Link></li>
      <li><a href="/#order">Order Online</a></li>
      <li><a href="/#login">Login</a></li>
    </ul>
  </nav>
);

export default Nav;