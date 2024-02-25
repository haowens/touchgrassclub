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
    fontSize: '4rem',
    marginBottom: "30px"
};

const fontStyle2 = {
  fontFamily: 'Thunder-BoldLC',
  textAlign: 'center',
  fontSize: '4rem',
  marginBottom: "30px",
  color: "rgb(101, 30, 99)"
};

const Forum = () => {
  const [messages, setMessages] = useState([
    { name: "Sara", message: "Hey guys! I don't have a car and live on UNC's campus, can anyone pick up my race packet for me tomorrow??", id: 1 },
    { name: "Andrew", message: "Hey guys, does anyone remember where all the hills were last year?", id: 2 },
    { name: "Ananya", message: "Also need someone to pick up my race packet for me!!! Will get you coffee as a thank you :)", id: 3 }
  ]);
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const handleButtonClickContact = () => {
    navigate('/contact');
  }
  const handleButtonClickAbout = () => {
    navigate('/card');
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
      {/* <h1 style={customFontStyle}>FORUM</h1> */}
      <div style={{display:"flex", flexDirection: "row", gap: "15px"}}>
        <h1 style={fontStyle}>ALL THINGS</h1>
        <h1 style={fontStyle2}>TAR HEEL 10</h1>
      </div>
      <div className='forum-content'> 
        <div className="post-card">
          <div className="card-header">
            <img src={profile} alt="Profile" className="profile-picture" />
            <h2>Your Name</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleMessageSubmit} style={{display: "flex", flexDirection: "column", gap: "20px"}}>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className='input-2'
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
      <button className="feedback1" onClick={handleButtonClickContact}>Add an event or resource</button>
      <button className="feedback3" onClick={handleButtonClickAbout}>About us!</button>
    </div>
  );
};

export default Forum;
