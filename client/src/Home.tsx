import React from 'react';
import { useNavigate } from "react-router-dom";

// import axios from 'axios';

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      Hellloooo!
      <button onClick={() => navigate('/about')}>Go to About Page</button>
    </div>
  )
}

export default Home;