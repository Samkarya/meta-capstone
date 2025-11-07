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

  //client side validation
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