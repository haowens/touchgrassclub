import React from 'react';
import './card.css'; // Import CSS file for styling

const Card = () => {
    return (
        <div className="cardContainer">
        <h1 className='main'> ABOUT US</h1>
               <div className="row">
                    <div className="leftCard">
                        <h1>12 years</h1>
                        <h3 className="insideText">The average age at which kids get their first phone</h3>
                     </div>
    

                <div className="rightCard">
                  <h1>7 hours</h1>
                  <h3 className="insideText">The average amount of time Americans spend on their screens per day.</h3>
                </div>
              </div>
              <div className="heading">
                <h1>The average amount of time spent</h1>
            </div>
              <div className="row">
                <div className="subCard">
                  <h2>0.26 hours</h2>
                  <h4> reading </h4>
                </div>
                <div className="subCard">
                  <h2>0.29 hours</h2>
                  <h4> playing sports </h4>
                </div>
                <div className="subCard">
                  <h2>0.56 hours</h2>
                  <h4> socializing </h4>
                </div>
              </div>
              <div className="heading">
                <h1> We spend so much time online it's about time you go outside and</h1>
                </div>
            <div className="main">
                <h1> TOUCH THE GRASS</h1>
                </div>
            </div>
          );
        };
    

export default Card;
