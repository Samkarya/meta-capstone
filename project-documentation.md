# React Project Documentation

Generated on: 7/11/2025, 11:25:56 am

## Project Structure

```
├── 📄 api.js
├── 📄 App.css
├── 📄 App.js
├── 📁 **components/**
│   ├── 📄 BookingForm.jsx
│   ├── 📄 CallToAction.jsx
│   ├── 📄 Chicago.jsx
│   ├── 📄 ConfirmedBooking.jsx
│   ├── 📄 CustomersSay.jsx
│   ├── 📄 Footer.jsx
│   ├── 📄 Nav.jsx
│   └── 📄 Specials.jsx
├── 📁 **icons_assets/**
├── 📄 index.css
├── 📄 index.js
├── 📁 **pages/**
│   ├── 📄 BookingPage.jsx
│   └── 📄 Homepage.jsx
├── 📄 reportWebVitals.js
└── 📄 setupTests.js
```

## File Contents

The following sections contain the content of each file in the project.


### api.js

```javascript
// Seeded random number generator for consistent results
const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
}

// Fetch available booking times for a given date
export const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

// Submit booking form data
export const submitAPI = function(formData) {
  // Simulate API submission
  console.log('Submitting form data:', formData);
  return true;
};
```

---

### App.css

```css
/* Reset and General Layout */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Karla', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  color: #333;
  line-height: 1.6;
}

main {
  min-height: 60vh;
}

/* Navigation */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

nav img {
  height: 50px;
}

nav ul {
  list-style-type: none;
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 0;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #F4CE14;
}

/* Hero Section (Call to Action) */
.hero {
  background-color: #495E57;
  color: white;
  padding: 3rem 5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero h1 {
  font-size: 3.5rem;
  color: #F4CE14;
  margin-bottom: 0;
  font-family: 'Markazi Text', serif;
  font-weight: 500;
}

.hero h2 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  font-family: 'Markazi Text', serif;
  font-weight: 400;
}

.hero p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero button {
  background-color: #F4CE14;
  color: #333;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.hero button:hover {
  background-color: #e8c203;
}

.hero img {
  width: 100%;
  max-width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Specials Section */
section {
  padding: 3rem 5%;
}

#menu {
  background-color: #fff;
}

.specials-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.specials-header h2 {
  font-size: 2.5rem;
  margin: 0;
  font-family: 'Markazi Text', serif;
}

.reserve-button {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.reserve-button:hover {
  background-color: #333;
}

.specials-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.special-card {
  background-color: #EBD8CE;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.special-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.special-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.special-card-content {
  padding: 1.5rem;
  background-color: #EBD8CE;
}

.special-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.special-card-header h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #000;
}

.special-card-header .price {
  color: #EE9972;
  font-weight: 700;
  font-size: 1.1rem;
}

.special-card p {
  color: #333;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.95rem;
}

.special-card button {
  background: none;
  border: none;
  color: #000;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  padding: 0;
}

.special-card button:hover {
  color: #495E57;
}

/* Testimonials Section */
#testimonials {
  background-color: #8B7F7A;
  color: #000;
  padding: 3rem 5%;
}

#testimonials h2 {
  color: #000;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-family: 'Markazi Text', serif;
}

.testimonials-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.testimonial-card {
  background-color: #EBD8CE;
  color: #000;
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.testimonial-avatar {
  width: 60px;
  height: 60px;
  background-color: #8B7F7A;
  border-radius: 50%;
  margin: 0 auto 1rem;
}

.testimonial-rating {
  color: #000;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.testimonial-card h4 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: #000;
}

.testimonial-description {
  font-size: 0.9rem;
  color: #333;
  line-height: 1.5;
  margin-top: 0.5rem;
}

/* About Section */
#about {
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: 3rem 5%;
}

.about-content h1 {
  font-size: 3rem;
  margin-bottom: 0;
  font-family: 'Markazi Text', serif;
  font-weight: 500;
  color: #000;
}

.about-content h2 {
  font-size: 2rem;
  margin: 0 0 1rem 0;
  font-family: 'Markazi Text', serif;
  font-weight: 400;
  color: #000;
}

.about-content p {
  color: #333;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.about-images {
  position: relative;
  height: 400px;
}

.image-wrapper {
  position: absolute;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.image-front {
  width: 280px;
  height: 320px;
  background-color: #8B7F7A;
  top: 0;
  left: 0;
  z-index: 2;
  border: 3px solid #5FA3D0;
}

.image-back {
  width: 280px;
  height: 320px;
  background-color: #8B7F7A;
  bottom: 0;
  right: 0;
  z-index: 1;
}

/* Footer */
footer {
  background-color: #8B7F7A;
  color: #000;
  padding: 3rem 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
}

.footer-logo-placeholder {
  width: 120px;
  height: 150px;
  background-color: #EBD8CE;
  border-radius: 8px;
}

footer h3 {
  color: #000;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 700;
}

footer ul {
  list-style: none;
  padding: 0;
}

footer ul li {
  margin-bottom: 0.5rem;
}

footer ul li a {
  color: #000;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.95rem;
}

footer ul li a:hover {
  color: #333;
}

footer p {
  margin: 0.3rem 0;
  font-size: 0.95rem;
  color: #000;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

/* Booking Form */
.booking-form {
  display: grid;
  max-width: 500px;
  margin: 2rem auto;
  gap: 1.5rem;
  padding: 2rem;
  background-color: #EDEFEE;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.booking-form label {
  font-weight: 600;
  color: #495E57;
  margin-bottom: -1rem;
}

.booking-form input,
.booking-form select {
  padding: 0.8rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

.booking-form input:focus,
.booking-form select:focus {
  outline: none;
  border-color: #495E57;
}

.booking-form input[type="submit"] {
  background-color: #F4CE14;
  color: #333;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.booking-form input[type="submit"]:hover {
  background-color: #e8c203;
}

.booking-form .error {
  color: #d32f2f;
  font-size: 0.9rem;
  margin-top: -1rem;
}

/* Booking Page */
div:has(> h1:contains("Table Reservation")) {
  padding: 3rem 5%;
  background-color: #fff;
}

div:has(> h1:contains("Table Reservation")) h1 {
  text-align: center;
  font-size: 3rem;
  color: #495E57;
  margin-bottom: 2rem;
  font-family: 'Markazi Text', serif;
}

/* Confirmed Booking */
.confirmed-booking {
  text-align: center;
  padding: 5rem 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.confirmation-icon {
  width: 100px;
  height: 100px;
  background-color: #495E57;
  color: #F4CE14;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin: 0 auto 2rem;
  font-weight: bold;
}

.confirmed-booking h2 {
  color: #495E57;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-family: 'Markazi Text', serif;
}

.confirmed-booking p {
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.confirmed-booking button {
  background-color: #F4CE14;
  color: #333;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 2rem;
}

.confirmed-booking button:hover {
  background-color: #e8c203;
}

/* Responsive Design */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
  }

  nav ul {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .hero {
    grid-template-columns: 1fr;
  }

  .hero img {
    justify-self: center;
    max-width: 100%;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero h2 {
    font-size: 2rem;
  }

  .specials-container {
    grid-template-columns: 1fr;
  }

  .testimonials-container {
    grid-template-columns: 1fr;
  }

  #about {
    grid-template-columns: 1fr;
  }

  .about-images {
    height: 300px;
  }

  footer {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-logo-placeholder {
    margin: 0 auto;
  }
}
```

---

### App.js

```javascript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
```

---

## components


### components\BookingForm.jsx

```javascript
import React, { useState } from 'react';

const BookingForm = ({ availableTimes, onDateChange, submitForm }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: availableTimes[0] || '',
    guests: 1,
    occasion: 'Birthday',
    name: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.date) tempErrors.date = "Date is required";
    if (!formData.time) tempErrors.time = "Time is required";
    if (formData.guests < 1 || formData.guests > 10) tempErrors.guests = "Guests must be between 1 and 10";
    if (!formData.name) tempErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is not valid";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (id === 'date') {
      onDateChange(new Date(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      submitForm(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form" noValidate>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="date" value={formData.date} onChange={handleChange} required />
      {errors.date && <p className="error">{errors.date}</p>}

      <label htmlFor="res-time">Choose time</label>
      <select id="time" value={formData.time} onChange={handleChange}>
        {availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={formData.guests} onChange={handleChange} />
      {errors.guests && <p className="error">{errors.guests}</p>}

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={formData.occasion} onChange={handleChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
      </select>

      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" value={formData.name} onChange={handleChange} required />
      {errors.name && <p className="error">{errors.name}</p>}

      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={formData.email} onChange={handleChange} required />
      {errors.email && <p className="error">{errors.email}</p>}

      <input type="submit" value="Reserve Now!" aria-label="On Click" />
    </form>
  );
};

export default BookingForm;
```

---

### components\CallToAction.jsx

```javascript
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
```

---

### components\Chicago.jsx

```javascript
import React from 'react';

const Chicago = () => (
  <section id="about">
    <div className="about-content">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit.</p>
    </div>
    <div className="about-images">
      <div ><img className="image-wrapper image-front" src={require('../icons_assets/Mario and Adrian A.jpg')} alt="Chef mario and adrian" /></div>
      <div ><img className="image-wrapper image-back" src={require('../icons_assets/Mario and Adrian b.jpg')} alt="Chef mario and adrian" /></div>
    </div>
  </section>
);

export default Chicago;
```

---

### components\ConfirmedBooking.jsx

```javascript
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
```

---

### components\CustomersSay.jsx

```javascript
import React from 'react';

const CustomersSay = () => {
  const testimonials = [
    {
      rating: "Rating",
      name: "Name",
      description: "Description"
    },
    {
      rating: "Rating",
      name: "Name",
      description: "Description"
    },
    {
      rating: "Rating",
      name: "Name",
      description: "Description"
    },
    {
      rating: "Rating",
      name: "Name",
      description: "Description"
    }
  ];

  return (
    <section id="testimonials">
      <h2>Testimonial</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-avatar"></div>
            <p className="testimonial-rating">{testimonial.rating}</p>
            <h4>{testimonial.name}</h4>
            <p className="testimonial-description">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomersSay;
```

---

### components\Footer.jsx

```javascript
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
```

---

### components\Nav.jsx

```javascript
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
```

---

### components\Specials.jsx

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const Specials = () => {
  const specials = [
    {
      name: "Greek Salad",
      price: "$5.99",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit.",
      image: require('../icons_assets/greek salad.jpg')
    },
    {
      name: "Bruschetta",
      price: "$5.99",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit.",
      image: require('../icons_assets/bruchetta.svg').default
    },
    {
      name: "Lemon Dessert",
      price: "$5.99",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit.",
      image: require('../icons_assets/lemon dessert.jpg')
    }
  ];

  return (
    <section id="menu">
      <div className="specials-header">
        <h2>Specials</h2>
        <Link to="/booking"><button className="reserve-button">Reserve A Table</button></Link>
      </div>
      <div className="specials-container">
        {specials.map((special, index) => (
          <div key={index} className="special-card">
            <img src={special.image} alt={special.name} />
            <div className="special-card-content">
              <div className="special-card-header">
                <h3>{special.name}</h3>
                <span className="price">{special.price}</span>
              </div>
              <p>{special.description}</p>
              <button>Order a Delivery <img src={require('../icons_assets/Dish icon.svg').default} alt="order" /> </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;
```

---

## icons_assets


### index.css

```css

```

---

### index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

---

## pages


### pages\BookingPage.jsx

```javascript
import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../api';

export const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return action.payload;
  }
  return state;
};

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const times = fetchAPI(today);
    dispatch({ type: 'UPDATE_TIMES', payload: times });
  }, []);

  const handleDateChange = (date) => {
    const times = fetchAPI(date);
    dispatch({ type: 'UPDATE_TIMES', payload: times });
  };

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    }
  };

  return (
    <div>
      <h1>Table Reservation</h1>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;
```

---

### pages\Homepage.jsx

```javascript
import React from 'react';
import CallToAction from '../components/CallToAction';
import Specials from '../components/Specials';
import CustomersSay from '../components/CustomersSay';
import Chicago from '../components/Chicago';

const Homepage = () => {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
};

export default Homepage;
```

---

### reportWebVitals.js

```javascript
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

```

---

### setupTests.js

```javascript
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

```

---
