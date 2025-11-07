import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => (
  <div className="confirmed-booking">
    <div className="confirmation-icon">✓</div>
    <h2>Booking Confirmed!</h2>
    <p>Your table has been successfully reserved at Little Lemon.</p>
    <p>You'll receive a confirmation email with all the details shortly.</p>
    <Link to="/">
      <button>Return to Home</button>
    </Link>
  </div>
);

export default ConfirmedBooking;