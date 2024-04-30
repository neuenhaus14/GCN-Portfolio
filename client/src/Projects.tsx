import React from "react";
import {Container, Row, Col, Nav, Tab} from 'react-bootstrap'

import PGCarousel from "./PGCarousel";
import QPCarousel from "./QPCarousel";
import TFCarousel from "./TFCarousel";
import Game from './Game';

const Projects = () => {


  return (
    <div className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}> */}
                <h2>Projects</h2>
                <p>The following projects have been created or maintained using JavaScript or TypeScript. I am proud of all my work, but I am most proud of Pardi Gras. 
                  I used a lot of unfamiliar tech, I benefited from working collaboratively, and I did a great job at working towards a finished product.
                  As it is still deployed, go on and take a look at what my team and I created. I insit!
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Apps from Scratch</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Legacy Code Bases</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  {/* <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}></Tab.Content> */}
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <div className="row">
                        <div className="col-sm" >
                          <a href="https://pardigras.org/">Pardi Gras</a>
                          <h5>Your One-Stop-Shop for Managing the Chaos of 
                          Mardi Gras</h5>
                          <div className="carousel">
                            <PGCarousel/>
                          </div>
                        </div>
                          <div className="col-sm">
                            <a href="https://github.com/neuenhaus14/QuizParty" >Quiz Party</a>            
                            <h5>Fun, competitive quiz app for testing trivia knowledge or
                            custom created quiz sets.</h5> 
                            <div className="carousel">
                              <QPCarousel/>
                            </div>
                          </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div className="col-sm" >
                      <a href="https://github.com/KittyScripters/Take-a-Hike" >Take a Hike</a>
                        <h5>Plan an outdoor trip with trails and birds <br/> in your area and
                        leave comments about the experience.</h5>
                      <div className="carousel">
                        <TFCarousel/>
                      </div>
                    </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              {/* </div>}
            </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </div>
      // <Game />
  );
};

export default Projects;


// return (
//   <div>
//   <div className="container-sm" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap", alignItems: "center",}} >
//     <p> The following apps were proudly built using JavaScript and various Libraries and Frameworks.</p>
//       <div className="row">
//         <div className="col-sm" >
//             <a href="https://pardigras.org/" style={{fontSize: "24px", fontWeight:600}}>PARDI GRAS</a>
//             <h5>Your One-Stop-Shop for Managing the Chaos of Mardi Gras</h5>
//             <div className="carousel">
//               <PGCarousel/>
//             </div>
//           </div>
//         <div className="col-sm" >
//               <a href="https://github.com/KittyScripters/Take-a-Hike" style={{fontSize: "24px", fontWeight:600}}>TAKE-A-HIKE</a>
//               <h5>Plan an outdoor trip with trails and birds in your area and
//               leave comments about the experience.</h5>
//             <div className="carousel">
//               <TFCarousel/>
//             </div>
//           </div>
//           <div className="col-sm">
//             <a href="https://github.com/neuenhaus14/QuizParty" style={{fontSize: "24px", fontWeight:600}}>QUIZ PARTY</a>
//             <h5>Fun, competitive quiz app for testing trivia knowledge or
//             custom created quiz sets.</h5> 
//             <div className="carousel">
//               <QPCarousel/>
//             </div>
//           </div>
//         </div>
//     </div>
    
//     <div className="container-sm" style={{marginTop: "20px"}}>
//       <div style={{fontSize: "24px", fontWeight:600, color:"#FF928B"}}>HIGH VOLTAGE NOLA</div>
//       <p> Updates and Maintains Website using Wix </p>
//       <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly",  alignItems: "center", }} >
//       <iframe
//         title="gneuenhaus Resume"
//         src="https://www.highvoltagenola.org/"
//         width="100%"
//         height="600px"
//       />
//       </div>
//     </div>
//   </div>
// );