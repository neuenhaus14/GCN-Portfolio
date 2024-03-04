import React from "react";

import NavBar from "./NavBar";

const Resume = () => {
  return (
    <div>
      <NavBar />
      <div
        className="container-sm"
        style={{
          paddingTop: "10px", paddingBottom: "10px", marginTop: "10px",
          border: "4px solid #FF928B",
        }}
      >
        <iframe
          title="gneuenhaus Resume"
          src="/gNeuenhausResume.pdf"
          width="100%"
          height="1000px"
        />
      </div>
    </div>
  );
};

export default Resume;
