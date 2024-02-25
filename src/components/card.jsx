import React from 'react';
import './card.css'; // Import CSS file for styling

const Card = () => {
  return (
    <div> 
    <div className="cardContainer">
      <div className="leftCard">
        <h2 style={{ textAlign: 'center' }}>12</h2>
        <h2 style={{ textAlign: 'center' }}> years</h2>
      </div>
      <div className="rightCard">
        <p>The average age at which kids get their first phone.</p>
      </div>
    </div>

    <div className="cardContainer">
    <div className="rightard">
    <p>The average age at which kids get their first phone.</p>
        </div>
    <div className="leftCard">
    <h2 style={{ textAlign: 'center' }}>12</h2>
        <h2 style={{ textAlign: 'center' }}> years</h2>
    </div>
    </div>
    </div>
    
  );
};

export default Card;
