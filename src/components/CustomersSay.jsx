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