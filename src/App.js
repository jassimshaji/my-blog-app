import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import BlogForm from "./components/BlogForm";

function App() {
  return (

    <Router>
      <div className="video-background-container">
        {/* Video element for background video */}
        <video className="video-background" autoPlay muted loop>
          <source src="https://assets.codepen.io/6093409/river.mp4"  type="video/mp4" /> {/* Path to your video file */}
        </video>
      </div>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<BlogForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


