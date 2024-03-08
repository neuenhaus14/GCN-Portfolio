import React, {useState} from "react";
import { Carousel } from 'react-bootstrap';

import QPLeader from "./img/qpScreenShots/QPLeader.png";
import QPPlay from "./img/qpScreenShots/QPPlay.png";
import QPPlatQ from "./img/qpScreenShots/QPPlayQ.png";
import QPProfile from "./img/qpScreenShots/QPProfile.png";
import QPQuiz from "./img/qpScreenShots/QPQuiz.png";

// will need to make others for the other projects
const QPCarousel = () => {

  const [index, setIndex] = useState(0);
  const pardiImages = [
    {image: QPLeader, title: 'Check the Leaderboards', description: `Search for other Users to follow and compare your scores`}, 
    {image: QPPlay, title: 'Welcome to the Game', description: `Select your category and difficulty. Harder the question, higher the highscore!`},
    {image: QPPlatQ, title: 'Test your Knowledge', description: `Answer all 5 correctly to increase Highscore. Like a question? Favorite it.`}, 
    {image: QPProfile, title: 'Compare your Stats', description: `See all your stats in one space.`}, 
    {image: QPQuiz, title: 'Create custom Quizzes', description: `Play your custom quizes or send to a follower for them to play.`}, 
  ]

  const handleSelect = (selectedIndex: number, e: any) => {
    console.log('selected index: ', selectedIndex)
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="carousel-container"
              activeIndex={index}
              onSelect={handleSelect}
              nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
    >
      {pardiImages.map((slide, index) => (
        <Carousel.Item key={index} style={{}}>
          <p>{slide.title}</p>
          <img
            className="d-block"
            src={slide.image}
            alt="First slide"
            width= "73%"
            height="auto" 
            style={{ margin: "auto", paddingBottom: "10px"}}
          />
          <p style={{paddingBottom: "10px"}}>{slide.description}</p>
        </Carousel.Item>
      ))}
    </Carousel>
  );  

}

export default QPCarousel;