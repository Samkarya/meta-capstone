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