import React, { useState } from 'react';
import "./chatStyle.css";
import profile from "./profile_icon.png";
import { useNavigate } from 'react-router-dom';

const customFontStyle = {
    fontFamily: 'Thunder-BoldLC',
    textAlign: 'center',
    fontSize: '3rem'
};

const fontStyle = {
    fontFamily: 'Thunder-BoldLC',
    textAlign: 'center',
};

const Forum = () => {
  const [messages, setMessages] = useState([
    { name: "Sara", message: "Hey guys! 3 of my friends are going hiking in Eno State Park on Saturday. We have 2 more spots available in our car if anyone wants to join!", id: 1 },
    { name: "Andrew", message: "Hey! If you're interested in reading you should check out the library crawl that I am organising next Tuesday! Few more spots open :) ", id: 2 },
    { name: "Ananya", message: "Does anyone want to go rock climbing with me at Pilot Mountain? Looking for a climbing buddy!", id: 3 }
  ]);
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact');
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      setMessages([...messages, { name: "John Doe", message: inputText, id: Date.now() }]);
      setInputText('');
    }
  };

  return (
    <div className="forum-container">
      <h1 style={customFontStyle}>FORUM</h1>
      <h1 style={fontStyle}>Find your tribe! Get in touch with your community!</h1>
      <div className='forum-content'> 
        <div className="post-card">
          <div className="card-header">
            <img src={profile} alt="Profile" className="profile-picture" />
            <h2>John Doe</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleMessageSubmit}>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="message-input"
              />
              <button type="submit" className="send-button">Send</button>
            </form>
          </div>
        </div>
        <div className="messages-container">
          {messages.map((message, index) => (
            <div key={message.id} className="message-card">
              <div className="card-header">
                <img src={profile} alt="Profile" className="profile-picture" />
                <h2>{message.name}</h2>
              </div>
              <div className="message">{message.message}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="feedback1" onClick={handleButtonClick}>Add an event or resource</button>
      <button className="feedback3" onClick={handleButtonClick}>About us!</button>
    </div>
  );
};

export default Forum;
