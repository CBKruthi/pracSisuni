import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Navbar from "./component/Navbar";
import Culture from "./pages/culture";
import "./App.css";

function App() {
  return (
    <>
    
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/culture" element={<Culture />} />
      
    </Routes>

    </>
  );
}

export default App;
