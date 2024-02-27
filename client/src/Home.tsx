import React from 'react';
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
//import face from "./face.jpg"
import face from "./img/face.jpg"
import gretAward from ".//img/gretAward.jpg"
import gretPresent from ".//img/gretPresent.jpg"
import momGret from ".//img/momGret.jpg"



const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      {/* Hellloooo!
      This is my face!
      <img src={face} alt="gretchen" width="700" height="500"/><br /> */}
      <div className="container-sm">
        <div className="row align-items-center">
          <div className="col d-flex justify-content-center">
            <img src={gretAward} width="100%" height="auto" alt="First slide" />
          </div>
          <div className="col d-flex justify-content-center">
            <img src={gretPresent} width="100%" height="auto" alt="Second slide" />
          </div>
          <div className="col d-flex justify-content-center">
            <img src={momGret} width="100%" height="auto" alt="Third slide" />
          </div>
        </div>
        {/* <div style={{display:"flex", flexFlow:"center", alignItems:"center", gap: "10px", flexDirection: "row", }}> */}
          
        {/* </div> */}
      </div>
      <button onClick={() => navigate('/game')}>Go to Games</button>
    </div>
  )
}

export default Home;