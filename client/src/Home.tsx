import React from 'react';
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
//import face from "./face.jpg"
import face from "./img/face.jpg"
import Carousel from './Carousel';

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      Hellloooo!
      This is my face!
      <Carousel/>
      <img src={face} alt="gretchen" width="700" height="500"/>
      <button onClick={() => navigate('/game')}>Go to About Page</button>
    </div>
  )
}

export default Home;