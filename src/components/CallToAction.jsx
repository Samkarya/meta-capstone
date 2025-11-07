import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => (
  <section className="hero">
    <div>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      <Link to="/booking"><button>Reserve a Table</button></Link>
    </div>
    <div>
        <img src={require('../icons_assets/restauranfood.jpg')} alt="Restaurant food" style={{width: '100%', borderRadius: '16px'}}/>
    </div>
  </section>
);

export default CallToAction;