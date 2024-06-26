import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaMedium } from "react-icons/fa6";

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

// import banner from "./img/GNBanner2skinnyUpdate.png";
import logo from "./img/ggLogo.png"

interface NavBarProps {
  title: string;
}

const NavBar: React.FC<NavBarProps> = ({title}) => {
   
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100){
        setScrolled(true)
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);

  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  }

  return ( 
      <div >

        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} id="logo" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => {navigate("/"); onUpdateActiveLink('home')}}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => {navigate("/#skills"); onUpdateActiveLink('skills')}}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => {navigate("/#projects"); onUpdateActiveLink('projects')}}>Projects</Nav.Link>
              <Nav.Link href="#games" className={activeLink === 'games' ? 'active navbar-link' : 'navbar-link'} onClick={() => {navigate("/game"); onUpdateActiveLink('game')}}>Games</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/gretchen-neuenhaus/" className="linkedIn-social">
                  <FaLinkedinIn color="#9e9e9e" size="30px" />
                </a>
                <a href="https://github.com/neuenhaus14/" className="github-social">
                  <AiFillGithub color="#9e9e9e" size="30px" />
                </a>
                <a href="https://medium.com/@neuenhaus14/" className="medium-social">
                  <FaMedium color="#9e9e9e" size="30px" />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
          //   <div >
          //   <img src={banner} alt="gretchen" width="100%" height="auto"/><br />
          //   <Navbar className="navbar">
          //     <Navbar.Toggle  aria-controls="basic-navbar-nav" />
    
          //       <Nav>
          //         <NavDropdown title="Menu" id="basic-nav-dropdown">
          //           <NavDropdown.Item onClick={() => {navigate("/")}}>ABOUT</NavDropdown.Item>
          //           <NavDropdown.Item onClick={() => {navigate("/resume")}}>RESUME</NavDropdown.Item>
          //           <NavDropdown.Item onClick={() => {navigate("/development")}}>DEVELOPMENT</NavDropdown.Item>
          //           {/* <NavDropdown.Item onClick={() => {navigate("/contact")}}>CONTACT</NavDropdown.Item> */}
          //           <NavDropdown.Item onClick={() => navigate("/game")}>GAMES</NavDropdown.Item>
          //         </NavDropdown>
          //       </Nav>
    
          //     <div className="title">
          //       <h2>{title}</h2>
          //     </div>
          //     <div className="socials">
          //       <a href="https://www.linkedin.com/in/gretchen-neuenhaus/" className="linkedIn-social">
          //         <FontAwesomeIcon icon={faLinkedin} size="2x" />
          //       </a>
          //       <a href="https://github.com/neuenhaus14/" className="github-social">
          //         <AiFillGithub size="30px" />
          //       </a>
          //       <a href="https://medium.com/@neuenhaus14/" className="medium-social">
          //         <FaMedium size="30px" />
          //       </a>
          //     </div>
          // </Navbar>
          // </div>

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