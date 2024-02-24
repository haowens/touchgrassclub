import React, {useState} from "react";
import ChapelHillMap from "./ChapelHillMap";
import "./buttonGrid.css";
import Mapping from "./mapping";

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
    textAlign: 'center',
    fontSize: '5rem'
}


const EventPage = () => {
    const [showMapping, setShowMapping] = useState("false");

    const toggleComponent = () => {
        setShowMapping((prevShowMapping) => !prevShowMapping);
    }
return (
    <div style={containerStyle}>
       {showMapping ? 
        <ChapelHillMap />
       : 
        <Mapping />
       }
        

        <div style={rightStyle}>
            <h1 style={customFontStyle} > EVENTS </h1>
            <div className="button-container">
                <button className="button" onClick={toggleComponent}> {showMapping ? "Show Chapel Hill Map" : "Show Mapping"}
                Tar Heel 10 </button>
                <button className="button"> CFTK 5k </button>
                <button className="button"> City of Oaks Marathon </button>
            </div>
        </div>


    </div>
    
);
}

export default EventPage;