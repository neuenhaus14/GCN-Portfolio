// eslint-disable-typescript-eslint/no-unused-vars

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import Home from "./Home";
import Game from "./Game";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import NavBar from "./NavBar"

//import banner from "./img/GNBanner2skinny.png";
//import banner from "./img/GNBanner2skinny.jpg";

function App() {
  const [data, setData] = useState(null);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get("/api");
      setData(data.message);
      console.log(data)
    } catch {
      console.log("error");
    }
  };



  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
        </a>
      </header> */}
      
      
      {/* This is your response from the server!: {data} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div><NavBar title={"ABOUT"}/><Home /></div>} />
          <Route path="/game" element={<div><NavBar title={"GAME"}/><Game /></div>} />
          <Route path="/resume" element={<div><NavBar title={"RESUME"}/><Resume /></div>} />
          <Route path="/projects" element={<div><NavBar title={"PROJECTS"}/><Projects /></div>} />
          <Route path="/contact" element={<div><NavBar title={"CONTACT"}/><Contact /></div>} />
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;

