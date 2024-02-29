import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import Home from "./Home";
import Game from "./Game";

import banner from "./img/GNBanner2skinny.png";

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
      <img src={banner} alt="gretchen" width="100%" height="auto"/><br />
      This is your response from the server sossos!: {data}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
