import React from "react";

import PGCarousel from "./PGCarousel";
import QPCarousel from "./QPCarousel";
import TFCarousel from "./TFCarousel";

const Projects = () => {
  return (
    <div>
       <div className="container-sm" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap", alignItems: "center",}} >
      <p> The following apps were proudly built using JavaScript and various Libraries and Frameworks.</p>
        <div className="row">
          <div className="col-sm" >
              <a href="https://pardigras.org/" style={{fontSize: "24px", fontWeight:600}}>PARDI GRAS</a>
              <h5>Your One-Stop-Shop for Managing the Chaos of Mardi Gras</h5>
              <div className="carousel">
                <PGCarousel/>
              </div>
            </div>
          <div className="col-sm" >
                <a href="https://github.com/KittyScripters/Take-a-Hike" style={{fontSize: "24px", fontWeight:600}}>TAKE-A-HIKE</a>
                <h5>Plan an outdoor trip with trails and birds in your area and
                leave comments about the experience.</h5>
              <div className="carousel">
                <TFCarousel/>
              </div>
            </div>
            <div className="col-sm">
              <a href="https://github.com/neuenhaus14/QuizParty" style={{fontSize: "24px", fontWeight:600}}>QUIZ PARTY</a>
              <h5>Fun, competitive quiz app for testing trivia knowledge or
              custom created quiz sets.</h5> 
              <div className="carousel">
                <QPCarousel/>
              </div>
            </div>
          </div>
      </div>
      
      <div className="container-sm" style={{marginTop: "20px"}}>
        <div style={{fontSize: "24px", fontWeight:600, color:"#FF928B"}}>HIGH VOLTAGE NOLA</div>
        <p> Updates and Maintains Website using Wix </p>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly",  alignItems: "center", }} >
        <iframe
          title="gneuenhaus Resume"
          src="https://www.highvoltagenola.org/"
          width="100%"
          height="600px"
        />
        </div>
      </div>
    </div>
  );
};

export default Projects;
