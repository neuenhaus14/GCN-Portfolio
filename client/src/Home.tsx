/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from 'react';

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
      { showImg ? (
      <div id="unselected-img" className="container-sm" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap", alignItems: "center", }}>
        <div className="row">
          <div className="col-sm" style={{paddingBottom: "10px"}}>
            <img src={gretAward} width="100%" height="auto" alt="gretAward" onClick={() => openImage("gretAward")}/>
            <h4 className="overlay">Click to Enlarge or Shrink</h4>
          </div>
          <div className="col-sm" style={{paddingBottom: "10px"}}>
            <img src={gretPresent} width="100%" height="auto" alt="gretPresent" onClick={() => openImage("gretPresent")}/>
            <h4 className="overlay">Click to Enlarge or Shrink</h4>
          </div>
          <div className="col-sm">
            <img src={momGret} width="100%" height="auto" alt="momGret" onClick={() => openImage("momGret")}/>
            <h4 className="overlay">Click to Enlarge or Shrink</h4>
          </div>
        </div>
      </div>
        ): (
          <div id="selected-img" className="container-sm" > 
            <img src={image} alt="clicked photo" width="100%" height="auto" onClick={() => setShowImg(!showImg)}/>
          </div>
        )}
      <div className="container-sm" style={{backgroundColor:"#FEC3A6"}}>
        {/* <h3>ABOUT ME</h3> */}
        <h5> Hello! My name is Gretchen Neuenhaus, and in January I completed nearly 1300 hours of training and education from a coding boot camp here in New Orleans. <br/><br/>
          I’m trained as a full stack software developer most comfortable with the following tech stack: JavaScript/TypeScript, React, Node, Express, MySQL, 
          Sequelize, Bootstrap and Sass. <br/><br/>My professional goals are to continue creating with code. Whether that be new features, new software, new 
          apps, new websites, I find value and feel fulfilled when I create something new or my work solves a problem. I am eager to learn, and I bring valuable 
          working experience from my past professional roles.<br/><br/>  Away from my computer, you can find me playing ultimate frisbee, sailing, painting, traveling, or hammock hanging!  </h5>
      </div>
      
    </div>
  )
}

export default Home;