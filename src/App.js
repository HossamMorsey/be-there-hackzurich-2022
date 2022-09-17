import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import LogIn from "./components/LogIn";
import Registration from "./components/Registration";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
