import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageDrag from "./components/HomePageDrag";
import ChapelHillMap from "./components/ChapelHillMap";
import Running from "./components/routes/Running";
import Reading from "./components/routes/Reading";
import Hiking from "./components/routes/Hiking";
import Arts from "./components/routes/Arts";
import Yoga from "./components/routes/Yoga";
import Cooking from "./components/routes/Cooking";
import EventPage from "./components/event_page";
import Mapping from "./components/mapping";
import Forum from "./components/forum";
import ContactForm from "./components/ContactForm";

function App() {
  return (
      <Routes>
        <Route index element={<HomePageDrag />} />
        <Route path="/map" element={<ChapelHillMap/>} />
        <Route path="/running" element={<EventPage/>} />
        <Route path="/forum" element={<Forum/>} />
        <Route path="/arts" element={<Arts />} />
        {/* Add more routes for additional pages */} 
        <Route path="/reading" element={<Reading />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/hiking" element={<Hiking />} />
        <Route path="/cooking" element={<Cooking />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="*" element={<HomePageDrag />} />
        <Route path="/contact" element={<ContactForm/>}/>
        {/* Add more routes for additional pages */}
      </Routes>
  );
}

export default App;
