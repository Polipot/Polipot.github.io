import React from 'react';
import itchioLogo from '../assets/itchio_logo.svg';

const Card = ({ title, image, description, className }) => {
  return (
    <div className={`card ${className}`}>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <a href="/">
        <img src={itchioLogo} alt="logo itchio"></img>
      </a>
      <a href="/">
        <img src={itchioLogo} alt="logo itchio"></img>
      </a>
    </div>
  );
};

export default Card;
