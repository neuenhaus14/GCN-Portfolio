import React from "react";

import NavBar from "./NavBar";
import PGCarousel from "./Carousel";

const Projects = () => {
  return (
    <div>
      <NavBar />
       <div className="container-sm" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap", alignItems: "center", }} >
        <div className="row">
          <div className="col-sm" style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", }}>
              <a href="https://pardigras.org/" style={{fontSize: "24px", fontWeight:600}}>PARDI GRAS</a>
              <h5><b>Your One-Stop-Shop for Managing the Chaos of Mardi Gras</b><br/>
                Share gossip, costumes & throws
                Drop pins to map hot commodities
                Find live music, parade info & make plans with your friends</h5>
                <div className="carousel" style={{display: "flex", alignItems: "center",}}>
                <PGCarousel/>
              </div>
            </div>
            <div className="col-sm"style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", }}>
                <a href="https://github.com/KittyScripters/Take-a-Hike" style={{fontSize: "24px", fontWeight:600}}>TAKE-A-HIKE</a>
                <h5>Plan an outdoor trip with trails and birds in your area and
                leave comments about the experience.</h5>
              <div className="carousel" style={{display: "flex", alignItems: "center",}}>
                <PGCarousel/>
              </div>
            </div>
            <div className="col-sm" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", }}>
              <a href="https://github.com/neuenhaus14/QuizParty" style={{fontSize: "24px", fontWeight:600}}>QUIZ PARTY</a>
              <h5>Fun, competitive quiz app for testing trivia knowledge or
              custom created quiz sets.</h5> 
              <div className="carousel" style={{display: "flex", alignItems: "center",}}>
                <PGCarousel/>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Projects;
