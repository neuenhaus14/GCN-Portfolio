import React from "react";

//the resume is coming from the public folder

const Resume = () => {
  return (
    <div>
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
