import React from 'react';
import './card.css'; // Import CSS file for styling
import AboutUs from './aboutus';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const navigate = useNavigate()

  const handleButtonClickContact = () => {
    navigate('/contact');
  }
  const handleButtonClickAbout = () => {
    navigate('/about');
  }
    return (
        <div className="cardContainer">
            
        <h1 className='main'> ABOUT US</h1>
        <AboutUs />
               <div className="row">
                    <div className="leftCard">
                        <h2 className="number">12 years</h2>
                        <h3 className="insideText">The average age at which kids get their first phone</h3>
                     </div>
    

                <div className="rightCard">
                <h2 className="number"> 7 hours</h2>
                  <h3 className="insideText">The average amount of time Americans spend on their screens per day.</h3>
                </div>
              </div>
              <div className="heading">
                <h1 className='heading'>The average amount of time spent</h1>
            </div>
              <div className="row">
                <div className="subCard">
                  <h2 className="font">0.26 hours</h2>
                  <h4 className="font"> reading </h4>
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
              <div className="text">
                <h1 className="text"> We spend so much time online it's about time you go outside and</h1>
                </div>
            <div className="main">
                <h1> TOUCH THE GRASS</h1>
                </div>
                <button className="feedback1" onClick={handleButtonClickContact}>Add an event or resource</button>
      <button className="feedback3" onClick={handleButtonClickAbout}>About us!</button>
            </div>
          );
        };
    

export default Card;
