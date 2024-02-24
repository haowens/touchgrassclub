import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePageDrag from "./components/HomePageDrag";
import ChapelHillMap from "./components/ChapelHillMap";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageDrag/>} />
        <Route path="/map" element={<ChapelHillMap/>} />
        {/* Add more routes for additional pages */} 
      </Routes>
    </Router>
  );
}

export default App;
