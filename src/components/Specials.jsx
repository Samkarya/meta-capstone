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
              <button>Order a Delivery <img className="order-icon"src={require('../icons_assets/Dish icon.svg').default} alt="order" width='24px' height= '24px'/> </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;