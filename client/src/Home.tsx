/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import { ArrowRightCircle } from 'react-bootstrap-icons';

import Skills from './Skills';
import Projects from './Projects';


//import headerImg from "./img/face.jpg"
import { isSetAccessorDeclaration } from 'typescript';
// import gretAward from ".//img/gretAward.jpg"
// import gretPresent from ".//img/gretPresent.jpg"
import headerImg from ".//img/momGret.png"


const Home = () => {

  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [changeRate, setChangeRate] = useState<number>(300 - Math.random() * 100);
  const [index, setIndex] = useState<number>(1);

  const textToRotate = ['Full Stack Developer', 'Web Developer', 'UI/UX Designer']; 
  const period: number = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      changeText();
    }, changeRate)

    return () => clearInterval(ticker);

  }, [text])

  // function updates text displayed in tyeewriter like animation effects 
  // changeRate controls speed of animations 
  // period sets the pause btw displaying full text and starting to delete it 
  const changeText = () => {
    // get full text to show up first
    let i = loopNum % textToRotate.length;
    let fullText = textToRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
    setText(updatedText);
  
    // deletes faster if its being deleted
    if (isDeleting){
      setChangeRate((prevChangeRate => prevChangeRate / 2));
    }

    // full text has been displayed, set period to create pause before deletion starts
    if (!isDeleting && updatedText ===  fullText){
      setIsDeleting(true);
      setIndex((prevIndex => prevIndex - 1));
      setChangeRate(period);
     
    // full text has been deleted, change rate to a smaller pause before new text starts  
    } else if (isDeleting && updatedText === ''){
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setChangeRate(500);

    //   
    } else {
      setIndex((prevIndex => prevIndex + 1))
    }

  }

  return (
    <div>
    <div className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> */}
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Gretchen`} <div className="txt-rotate" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><div className="wrap">{text}</div></div></h1>
                  <p>In January, I completed nearly 1300 hours of training and education from a coding boot camp here in New Orleans. <br/>
                  My professional goals are to continue creating with code. Whether that be new features, product design, maintaining software, new 
                  apps, new websites, I find value and feel fulfilled when I create something new or my work solves a problem. <br/>
                  Away from my computer, you can find me playing ultimate frisbee, sailing, painting, traveling, or hammock hanging!
                  </p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect</button> */}
              {/* </div>}
            </TrackVisibility> */}
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}> */}
                  <img src={headerImg} id="banner-img" alt="Header Img"/>
                {/* </div>}
            </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
  <Skills/>
    </div> 
  <Projects />

</div>
  )

}


// const [showImg, setShowImg] = useState(true);
// const [image, setImage] = useState("")

// const openImage = (img:string) => {
//   setShowImg(!showImg)
//   img === "gretAward" ? setImage(gretAward) : img === "gretPresent" ? setImage(gretPresent) : img === "momGret" ? setImage(momGret) : setImage("")
// };

// return (
//   <div>
//     { showImg ? (
//     <div id="unselected-img" className="container-sm" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap", alignItems: "center", }}>
//       <div className="row">
//         <div className="col-sm" style={{paddingBottom: "10px"}}>
//           <img src={gretAward} width="100%" height="auto" alt="gretAward" onClick={() => openImage("gretAward")}/>
//           <h4 className="overlay">Click to Enlarge or Shrink</h4>
//         </div>
//         <div className="col-sm" style={{paddingBottom: "10px"}}>
//           <img src={gretPresent} width="100%" height="auto" alt="gretPresent" onClick={() => openImage("gretPresent")}/>
//           <h4 className="overlay">Click to Enlarge or Shrink</h4>
//         </div>
//         <div className="col-sm">
//           <img src={momGret} width="100%" height="auto" alt="momGret" onClick={() => openImage("momGret")}/>
//           <h4 className="overlay">Click to Enlarge or Shrink</h4>
//         </div>
//       </div>
//     </div>
//       ): (
//         <div id="selected-img" className="container-sm" > 
//           <img src={image} alt="clicked photo" width="100%" height="auto" onClick={() => setShowImg(!showImg)}/>
//         </div>
//       )}
//     <div className="container-sm" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
//       {/* <h3>ABOUT ME</h3> */}
//       <div style={{display: "flex", alignItems: "center", justifyContent: "center", width:"70vw"}}>
//       <h5> Hello! My name is Gretchen Neuenhaus, and in January I completed nearly 1300 hours of training and education from a coding boot camp here in New Orleans. <br/><br/>
//         I’m trained as a full stack software developer most comfortable with the following tech stack: JavaScript/TypeScript, React, Node, Express, MySQL, 
//         Sequelize, Bootstrap and Sass. <br/><br/>My professional goals are to continue creating with code. Whether that be new features, product design, maintaining software, new 
//         apps, new websites, I find value and feel fulfilled when I create something new or my work solves a problem. I am eager to learn, and I bring valuable 
//         working experience from my past professional roles.<br/><br/>  Away from my computer, you can find me playing ultimate frisbee, sailing, painting, traveling, or hammock hanging!  </h5>
//     </div>
//     </div>
//     <p>This site was created with React and JavaScript</p>
//   </div>
// )


export default Home;