import React from "react";

import NavBar from "./NavBar";
import PGCarousel from "./Carousel";

const Projects = () => {
  return (
    <div>
      <NavBar />
      <div
        className="container-sm"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div className="row">
          <div className="col-sm">
            <a href="https://pardigras.org/" style={{fontSize: "24px", fontWeight:600}}>PARDI GRAS</a>
            <p>Click on the link to see the full site in action or read about it below!</p> 
            <br/>
            Your one-stop shop for controlling the chaos of Mardi Gras!  <br/>
            Pardi Gras crowdsources content from its revelers to map essential <br/> 
            services like restrooms, emergency personnel, and vendors to keep <br/>
            everyone in the loop.Share gossip, show off your costume, and brag <br/>
            about your Zulu Coconut. Create events with your Krewe to plan your <br/>
            day, peruse through local music gigs, and stay in the know about <br/>
            upcoming parades.But most importantly: Laissez les bons temps rouler!<br/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm"></div>
          <PGCarousel />
        </div>
      </div>

      <div
        className="container-sm"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div className="row">
          <div className="col-sm"></div>
            <PGCarousel />
        </div>
        <div className="row">
          <div className="col-sm">
            <a href="https://pardigras.org/" style={{fontSize: "24px", fontWeight:600}}>TAKE-A-HIKE</a>
            <p>Click on the link to see the full site in action or read about it below!</p> 
            <br/>
            Your one-stop shop for controlling the chaos of Mardi Gras!  <br/>
            Pardi Gras crowdsources content from its revelers to map essential <br/> 
            services like restrooms, emergency personnel, and vendors to keep <br/>
            everyone in the loop.Share gossip, show off your costume, and brag <br/>
            about your Zulu Coconut. Create events with your Krewe to plan your <br/>
            day, peruse through local music gigs, and stay in the know about <br/>
            upcoming parades.But most importantly: Laissez les bons temps rouler!<br/>
          </div>
        </div>
      </div>

      <div
        className="container-sm"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div className="row">
          <div className="col-sm">
            <a href="https://pardigras.org/" style={{fontSize: "24px", fontWeight:600}}>QUIZ PARTY</a>
            <p>Click on the link to see the full site in action or read about it below!</p> 
            <br/>
            Your one-stop shop for controlling the chaos of Mardi Gras!  <br/>
            Pardi Gras crowdsources content from its revelers to map essential <br/> 
            services like restrooms, emergency personnel, and vendors to keep <br/>
            everyone in the loop.Share gossip, show off your costume, and brag <br/>
            about your Zulu Coconut. Create events with your Krewe to plan your <br/>
            day, peruse through local music gigs, and stay in the know about <br/>
            upcoming parades.But most importantly: Laissez les bons temps rouler!<br/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm"></div>
          <PGCarousel />
        </div>
      </div>
    </div>
  );
};

export default Projects;
