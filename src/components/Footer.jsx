import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className="footer-logo">
      <div className="footer-logo-placeholder"></div>
    </div>
    <div className="footer-section">
      <h3>Doormat Navigation</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#menu">Menu</a></li>
        <li><Link to="/booking">Reservation</Link></li>
        <li><a href="/#order">Order Online</a></li>
        <li><a href="/#login">Login</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Contact</h3>
      <p>Address</p>
      <p>phone Number</p>
      <p>email</p>
    </div>
    <div className="footer-section">
      <h3>Social Media Links</h3>
      <p>Address</p>
      <p>phone Number</p>
      <p>email</p>
    </div>
  </footer>
);

export default Footer;