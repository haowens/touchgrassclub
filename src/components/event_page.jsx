import React from "react";
import ChapelHillMap from "./ChapelHillMap";
import "./buttonGrid.css";

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
return (
    <div style={containerStyle}>
        <ChapelHillMap />

        <div style={rightStyle}>
            <h1 style={customFontStyle} > EVENTS </h1>
            <div className="button-container">
                <button className="button"> Tar Heel 10 </button>
                <button className="button"> CFTK 5k </button>
                <button className="button"> City of Oaks Marathon </button>
            </div>
        </div>


    </div>
    
);
}

export default EventPage;