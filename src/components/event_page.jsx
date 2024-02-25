import React, {useState} from "react";
import ChapelHillMap from "./ChapelHillMap";
import "./buttonGrid.css";
import Mapping from "./mapping";
import Run from "./run";

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
    fontFamily: 'Thunder',
    fontSize: '5rem'
}


const EventPage = () => {
    const [showMapping, setShowMapping] = useState("false");
    const [showRun, setShowRun] = useState(false);

    const toggleComponent = () => {
        setShowMapping((prevShowMapping) => !prevShowMapping);
    }

    const toggleRun = () => {
        setShowRun((prevShowRun) => !prevShowRun);
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
            <h1 style={customFontStyle} > EVENTS </h1>
            <div className="button-container">
                <button className="button" onClick={toggleComponent}> Tar Heel 10 </button>
                <button className="button"> CFTK 5k </button>
                <button className="button"> City of Oaks Marathon </button>
                <button className="button" onClick={toggleRun}> ZTA 5k </button>
                <button className="button"> Triathlon </button>
                <button className="button"> Annual 10k </button>
            </div>
        </div>


    </div>
    
);
}

export default EventPage;