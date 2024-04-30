import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//the resume is coming from the public folder
import bootstrap from './img/skills/bootstrapCirc.png';
import cog from './img/skills/cogCirc.png';
import node from './img/skills/nodeCirc.png';
import react from './img/skills/reactCirc.png';
import sql from './img/skills/sqlCirc.png';
import tSjS from './img/skills/tSjSCirc.png';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    //avaScript/TypeScript, React, Node, Express, MySQL, 
//         Sequelize, Bootstrap and Sass
       <div className="skill" id="skills">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> While the skills listed below are not exhaustive, they are a good peek into what I can offer!<br></br> Check out my resume for a more indepth look.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                           <div className="item">
                                <img src={cog} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={tSjS} alt="Image" />
                                <h5>JavaScript & TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap and Sass</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </div>
   
  );
};

export default Skills;