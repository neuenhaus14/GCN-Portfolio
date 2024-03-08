import React from "react";

import NavBar from "./NavBar";
import PGCarousel from "./Carousel";

const Projects = () => {
  return (
    <div>
      <NavBar />
      {/* <div
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
          <div className="col-sm">
          <PGCarousel />
          </div>
        </div>
      </div> */}

      {/* <div className="container-sm" style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", flexWrap: "wrap", alignItems: "center", }} >
        <div className="row">
          <div className="col-sm">
              <a href="https://pardigras.org/" style={{fontSize: "24px", fontWeight:600}}>PARDI GRAS</a><br/>
              <b>Your One-Stop-Shop for Managing the Chaos of Mardi Gras</b>
              <br/>
              Share gossip, costumes & throws<br/>
              Drop pins to map hot commodities<br/>
              Find live music, parade info & make plans with your friends
            </div>
            <div className="col-sm">
              <a href="https://github.com/KittyScripters/Take-a-Hike" style={{fontSize: "24px", fontWeight:600}}>TAKE-A-HIKE</a><br/><br/>
              Plan an outdoor trip with trails and birds in your area and <br/>
              leave comments about the experience.  <br/>
            </div>
            <div className="col-sm">
              <a href="https://github.com/neuenhaus14/QuizParty" style={{fontSize: "24px", fontWeight:600}}>QUIZ PARTY</a><br/><br/>
              Fun, competitive quiz app for testing trivia knowledge or
              custom created quiz sets.  <br/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <PGCarousel />
            </div>
            <div className="col-sm">
              <PGCarousel />
            </div>
            <div className="col-sm">
              <PGCarousel />
            </div>
          </div>
      </div>
       */}
       {/* this is mobile layout */}
      {/* <div className="container-sm" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap", alignItems: "center", }} >
        <div className="row">
          <div className="col-sm">
              <a href="https://pardigras.org/" style={{fontSize: "24px", fontWeight:600}}>PARDI GRAS</a><br/>
              <b>Your One-Stop-Shop for Managing the Chaos of Mardi Gras</b>
              <br/>
              Share gossip, costumes & throws<br/>
              Drop pins to map hot commodities<br/>
              Find live music, parade info & make plans with your friends
            </div>
            <div className="col-sm">
              <PGCarousel />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <a href="https://github.com/KittyScripters/Take-a-Hike" style={{fontSize: "24px", fontWeight:600}}>TAKE-A-HIKE</a><br/><br/>
              Plan an outdoor trip with trails and birds in your area and <br/>
              leave comments about the experience.  <br/>
            </div>
            <div className="col-sm">
              <PGCarousel />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <a href="https://github.com/neuenhaus14/QuizParty" style={{fontSize: "24px", fontWeight:600}}>QUIZ PARTY</a><br/><br/>
              Fun, competitive quiz app for testing trivia knowledge or
              custom created quiz sets.  <br/>
            </div>
            <div className="col-sm">
              <PGCarousel />
            </div>
          </div>
      </div> */}

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


      {/* <div className="container-sm" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap", alignItems: "center", }} >
        <div className="row">
          <div className="col-sm">
            <a href="https://github.com/neuenhaus14/QuizParty" style={{fontSize: "24px", fontWeight:600}}>QUIZ PARTY</a><br/>
            Fun, competitive quiz app for testing trivia knowledge or custom created quiz sets.  <br/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm"></div>
          <PGCarousel />
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
