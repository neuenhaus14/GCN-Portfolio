import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//the resume is coming from the public folder

const Resume = () => {
  return (
    <div id="resume">

    
    <div className= "container-sm" >
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
