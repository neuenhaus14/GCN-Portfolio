/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from 'react';


import NavBar from "./NavBar";

//import face from "./img/face.jpg"
import gretAward from ".//img/gretAward.jpg"
import gretPresent from ".//img/gretPresent.jpg"
import momGret from ".//img/momGret.jpg"



const Home = () => {
  const [showImg, setShowImg] = useState(true);
  const [image, setImage] = useState("")

  const openImage = (img:string) => {
    setShowImg(!showImg)
    img === "gretAward" ? setImage(gretAward) : img === "gretPresent" ? setImage(gretPresent) : img === "momGret" ? setImage(momGret) : setImage("")
  };

  return (
    <div>
      {/* Hellloooo!
      This is my face!
      <img src={face} alt="gretchen" width="700" height="500"/><br /> */}
      <NavBar />
      <div className="container-sm" style={{paddingTop: "10px", paddingBottom: "10px", border:'4px solid #FF928B',}}>
        { showImg ? (
        <div className="row align-items-center">
          <div className="col d-flex justify-content-center">
            <img src={gretAward} width="100%" height="auto" alt="gretAward" onClick={() => openImage("gretAward")}/>
            <h4 className="overlay">Click to Enlarge or Shrink</h4>
          </div>
          <div className="col d-flex justify-content-center">
            <img src={gretPresent} width="100%" height="auto" alt="gretPresent" onClick={() => openImage("gretPresent")}/>
            <h4 className="overlay">Click to Enlarge or Shrink</h4>
          </div>
          <div className="col d-flex justify-content-center">
            <img src={momGret} width="100%" height="auto" alt="momGret" onClick={() => openImage("momGret")}/>
            <h4 className="overlay">Click to Enlarge or Shrink</h4>
          </div>
        </div>
        ): (
          <div className="row align-items-center">
            <img src={image} alt="clicked photo" width="100%" height="auto" onClick={() => setShowImg(!showImg)}/>
          </div>
        )}
      </div>
      <div className="container-sm" style={{paddingTop: "10px", paddingBottom: "10px", marginTop:"10px", marginBottom:"10px", border:'2px solid #FF928B', backgroundColor:"#FEC3A6"}}>
        <h3>ABOUT ME</h3>
        <h5> Hello! My name is Gretchen Neuenhaus, and I've just completed nearly 1300 hours of training and education from a coding boot camp here in New Orleans. 
        I’m trained as a full stack software engineer/ developer most comfortable with the following tech stack: SQL, Sequelize, JavaScript/TypeScript, React, Node, Express, Bootstrap and Sass. 
        Expressing my creativity through design and problem solving is a huge motivation for me. I find the Front End particularly enjoyable, especially UI/UX decisions, and where I feel I make the greatest contribution. <br /><br />
        Although that is what I’m most skilled in, that’s not to say I’m not capable or interested in other roles or technology. 
        Ideally I would continue with building or working with web applications, but I am also interested in working with security and machine learning. 
        I am currently learning Java in my free time! In my most recent application Pardi Gras, I’ve challenged myself to working with new tech, autonomously working through corresponding bugs, and creating something that makes me proud. <br /><br />
        Away from my computer, you can find me playing ultimate frisbee, sailing, painting, traveling, or hammock hanging! </h5>
      </div>
      
    </div>
  )
}

export default Home;