import React from "react";

import NavBar from "./NavBar";

const Resume = () => {
  return (
    <div>
      <NavBar />
      <div className="container-sm">
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
