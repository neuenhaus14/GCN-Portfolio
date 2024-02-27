import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  
  const navigate = useNavigate()

  return (
    <div className=".btn-group btn-group-lg" style={{paddingTop: "10px", paddingBottom: "10px"}}>
      <button type="button" className="btn btn-outline-primary" onClick={() => navigate('/')}>ABOUT</button>
      <button type="button" className="btn btn-outline-primary" onClick={() => navigate('/game')}>GAMES</button>
    </div>
  )
}

export default NavBar;