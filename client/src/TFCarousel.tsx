import React, {useState} from "react";
import { Carousel } from 'react-bootstrap';

import TFBirds from "./img/tfScreenShots/TFBirds.jpg";
import TFHike from "./img/tfScreenShots/TFHike.jpg";
import TFHiking from "./img/tfScreenShots/TFHiking.jpg";
import TFUser from "./img/tfScreenShots/TFUser.jpg";
import TFWeather from "./img/tfScreenShots/TFWeather.jpg";

// will need to make others for the other projects
const TFCarousel = () => {

  const [index, setIndex] = useState(0);
  const pardiImages = [
    {image: TFHike, title: 'Search for Hikes', description: `Search for hiking or biking trails in the area.`},
    {image: TFHiking, title: 'Read about a Hike', description: `Select one to research or review comments from other users.`}, 
    {image: TFUser, title: 'Create a Trip', description: `Manange or create trips from user page with hikes, weather, friends, and birds`}, 
    {image: TFWeather, title: 'Check the Weather', description: `Research weather details for your trip.`}, 
    {image: TFBirds, title: 'Look up Birds', description: `Add Birds to watchlist for upcoming trip or just reasearch for curiosity.`}, 
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

export default TFCarousel;