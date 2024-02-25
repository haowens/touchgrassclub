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

const Reading = () => {
  const [showMapping, setShowMapping] = useState("false");
  const navigate = useNavigate();


  const handleButtonClick = () => {
    navigate('/contact');
  }



  const toggleComponent = () => {
    setShowMapping((prevShowMapping) => !prevShowMapping);
  };
  return (
    <div style={containerStyle}>
      {showMapping ? <ChapelHillMap /> : <Mapping />}
      <div>
        <div class="reading2"></div>
        <div style={rightStyle}>
          <h1 style={customFontStyle}> EVENTS </h1>
          <h1 style={customFontStyle} > FREE OPTIONS </h1>
        </div>
      </div>
      <button className="feedback1" onClick={handleButtonClick}>Add an event or resource</button>
      <button className="feedback3" onClick={handleButtonClick}>About us!</button>
    </div>
  );
};

export default Reading;
