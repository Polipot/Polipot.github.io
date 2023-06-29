import React from 'react';

const Card = ({ title, image, description, className }) => {
  return (
    <div className={`card ${className}`}>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <a href="/">Lien 1</a>
      <a href="/">Lien 2</a>
    </div>
  );
};

export default Card;
