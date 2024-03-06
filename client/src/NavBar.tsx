import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,} from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  
  const navigate = useNavigate()

  return ( 
    // <div>
    <div className="navbar" style={{
      backgroundColor: "#CDEAC0",
      paddingTop: "10px",
      paddingBottom: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div className=".btn-group" >
        <button type="button" className="btn btn-primary" onClick={() => navigate('/')}>ABOUT</button>
        <button type="button" className="btn btn-primary" onClick={() => navigate('/resume')}>RESUME</button>
        <button type="button" className="btn btn-primary" onClick={() => navigate('/projects')}>PROJECTS</button>
        <button type="button" className="btn btn-primary" onClick={() => navigate('/game')}>GAMES</button>
      </div>
    {/* </div> */}
  
    </div>
  )
}

export default NavBar;