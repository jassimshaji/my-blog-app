import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import BlogForm from "./components/BlogForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Include Navbar at the top */}
        <Navbar />
        
        {/* Define the routes using Routes and Route */}
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/add-blog" element={<BlogForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


