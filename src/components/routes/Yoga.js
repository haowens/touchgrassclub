import React, { useState } from "react";
import ChapelHillMap from "../ChapelHillMap";
import "../buttonGrid.css";
import Mapping from "../mapping";
import { useNavigate } from "react-router-dom";

const containerStyle = {
  display: "flex",
};

const columnStyle = {
  flex: 1,
};

const rightStyle = {
  ...columnStyle,
  backgroundColor: "lightblue",
  paddingLeft: "30px",
  paddingRight: "30px",
};
const customFontStyle = {
  fontFamily: "Thunder-BoldLC",
  fontSize: "4rem",
};

const Yoga = () => {
  const [showMapping, setShowMapping] = useState("false");
  const navigate = useNavigate();


  const handleButtonClickContact = () => {
    navigate('/contact');
  }
  const handleButtonClickAbout = () => {
    navigate('/card');
  }



  const toggleComponent = () => {
    setShowMapping((prevShowMapping) => !prevShowMapping);
  };
  return (
    <div style={containerStyle}>
      {showMapping ? <ChapelHillMap /> : <Mapping />}
      <div>
        <div class="yoga2"></div>
        <div style={rightStyle}>
          <h1 style={customFontStyle}> EVENTS </h1>
          <h1 style={customFontStyle} > FREE OPTIONS </h1>
        </div>
      </div>
      <button className="feedback1" onClick={handleButtonClickContact}>Add an event or resource</button>
      <button className="feedback3" onClick={handleButtonClickAbout}>About us!</button>
    </div>
  );
};

export default Yoga;
