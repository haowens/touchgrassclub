import React, {useState} from "react";
import ChapelHillMap from "./ChapelHillMap";
import "./buttonGrid.css";
import Mapping from "./mapping";
import Run from "./run";
import { useNavigate } from "react-router-dom";

const containerStyle = {
    display: 'flex',
};

const columnStyle = {
    flex: 1,
};

const rightStyle = {
    ...columnStyle,
    backgroundColor: 'lightblue',
    paddingLeft: '30px',
    paddingRight: '30px'
};
const customFontStyle = {
    fontFamily: 'Thunder-BoldLC',
    fontSize: '4rem',
    margin: 'none'
}

 const feedback2 = {
    textAlign: "center",
    padding: "10px 20px",
    border: "none",
    borderRadius: "7px",
    backgroundColor:  "rgb(211, 234, 255)",
   color: "rgb(21, 0, 50)",
   marginTop: "10px"
  }


const EventPage = () => {
    const [showMapping, setShowMapping] = useState("false");
    const [showRun, setShowRun] = useState(false);
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [additionalInfo, setAdditionalInfo] = useState({});
    const navigate = useNavigate();

    const handleButtonClickContact = () => {
      navigate('/contact');
    }
    const handleButtonClickAbout = () => {
      navigate('/card');
    }

    const forum = () => {
        navigate("/forum");
    }

    const toggleComponent = () => {
        setShowMapping((prevShowMapping) => !prevShowMapping);
    }

    const toggleRun = () => {
        setShowRun((prevShowRun) => !prevShowRun);
      };

      const toggleAdditionalInfo = (info) => {
        toggleComponent(); // Call toggleComponent
        setShowAdditionalInfo((prevShowAdditionalInfo) => !prevShowAdditionalInfo);
        setAdditionalInfo(info);
      };
return (
    <div style={containerStyle}>
       {showMapping ? 
        <ChapelHillMap />
       : 
        <Mapping />
       }
       {showRun && <Run />}
        

        <div style={rightStyle}>
            <div className="running2"></div>
            <h1 style={customFontStyle} > EVENTS </h1>
            <div className="button-container">
                <button className="button" onClick={() =>
              toggleAdditionalInfo({
                price: "$80",
                date: "04/20/2024",
              })
            }>
                
                {/* onClick={toggleComponent}> */}
                <b style={{fontSize: "medium"}}>Tar Heel 10</b>
                {" "}
            {showAdditionalInfo && (
              <span>
                <br />
                Price: {additionalInfo.price} <br />
                <p style={{color: "purple", margin: "0px"}}>Date: {additionalInfo.date} </p>
                <button onClick={forum} style={feedback2}>Event Forum</button>
              </span>
            )}
                </button> 
                
                <button className="button"><b style={{fontSize: "medium"}}>CFTK 5K</b></button>
                <button className="button"><b style={{fontSize: "medium"}}>City of Oaks Marathon</b></button>
                <button className="button"><b style={{fontSize: "medium"}}>ZTA 5k</b></button>
                <button className="button"><b style={{fontSize: "medium"}}>Triathlon</b></button>
                <button className="button"><b style={{fontSize: "medium"}}>Annual 10k</b></button>
            </div>

            <h1 style={customFontStyle} > FREE OPTIONS </h1>
            <div className="button-container">
                <button className="button" onClick={toggleComponent}><b style={{fontSize: "medium"}}>Bolin Creek</b></button>
                <button className="button"><b style={{fontSize: "medium"}}>Eno State Park</b></button>
                <button className="button"><b style={{fontSize: "medium"}}>Carolina North Forest</b></button>
            </div>
        </div>
        <button className="feedback1" onClick={handleButtonClickContact}>Add an event or resource</button>
      <button className="feedback3" onClick={handleButtonClickAbout}>About us!</button>


    </div>
    
);
}

export default EventPage;