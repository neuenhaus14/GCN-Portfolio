import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import { AiFillGithub } from "react-icons/ai";
import { FaMedium } from "react-icons/fa6";

import banner from "./img/GNBanner2skinny.png";

interface NavBarProps {
  title: string;
}

const NavBar: React.FC<NavBarProps> = ({title}) => {
   
  const navigate = useNavigate()

  return ( 
      <div >
        <img src={banner} alt="gretchen" width="100%" height="auto"/><br />
        <Navbar className="navbar">
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />

            <Nav>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => {navigate("/")}}>ABOUT</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/resume")}}>RESUME</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {navigate("/projects")}}>PROJECTS</NavDropdown.Item>
                {/* <NavDropdown.Item onClick={() => {navigate("/contact")}}>CONTACT</NavDropdown.Item> */}
                <NavDropdown.Item onClick={() => navigate("/game")}>GAMES</NavDropdown.Item>
              </NavDropdown>
            </Nav>

          <div className="title">
            <h2>{title}</h2>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/gretchen-neuenhaus/" className="linkedIn-social">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/neuenhaus14/" className="github-social">
              <AiFillGithub size="30px" />
            </a>
            <a href="https://medium.com/@neuenhaus14/" className="medium-social">
              <FaMedium size="30px" />
            </a>
          </div>
      </Navbar>
      </div>
    // <div>
    //   <img src={banner} alt="gretchen" width="100%" height="auto"/><br />
    //   <div className="navbar">
    //     <div className=".btn-group" >
    //       <button type="button" className="btn btn-primary" onClick={() => navigate('/')}>ABOUT</button>
    //       <button type="button" className="btn btn-primary" onClick={() => navigate('/resume')}>RESUME</button>
    //       <button type="button" className="btn btn-primary" onClick={() => navigate('/projects')}>PROJECTS</button>
    //       <button type="button" className="btn btn-primary" onClick={() => navigate('/contact')}>CONTACT</button>
    //       {/* <button type="button" className="btn btn-primary" onClick={() => navigate('/game')}>GAMES</button> */}
    //     </div>
    //     <div className="socials">
    //       <a href="https://www.linkedin.com/in/gretchen-neuenhaus/" className="linkedIn-social">
    //           <FontAwesomeIcon icon={faLinkedin} size="2x" />    
    //       </a>
    //       <a href="https://github.com/neuenhaus14/" className="github-social">
    //           <AiFillGithub size="30px" />    
    //       </a>
    //     </div>
    //   </div>

  )
}

export default NavBar;