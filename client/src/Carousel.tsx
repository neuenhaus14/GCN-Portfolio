import React, {useState} from "react";
import { Carousel } from 'react-bootstrap';

import event from "./img/pgScreenShots/event.png";
import gigs from "./img/pgScreenShots/gigs.png";
import home from "./img/pgScreenShots/home.png";
import map from "./img/pgScreenShots/map.png";

const PGCarousel = () => {

  const [index, setIndex] = useState(0);
  const pardiImages = [
    {image: home, title: 'Stay Connected to the Community', description: `Posts & pics keep event-goers in-the-know about the festivities.`}, 
    {image: map, title: 'Get your bearings', description: `Map pins mark points of interest and your friends' real-time locations.`},
    {image: gigs, title: 'Get into the Groove', description: `Plan your night out with an up-to-date NOLA live music calendar.`}, 
    {image: event, title: 'Mark your Calendar', description: `Create geo-located events and invite your krewe to tag along.`}, 
  ]

  const handleSelect = (selectedIndex: number, e: any) => {
    console.log('selected index: ', selectedIndex)
    setIndex(selectedIndex);
  };

  return (
    // <div className="container-sm" style={{display: "flex", justifyContent: "center", flexDirection: "column", flexWrap: "wrap", alignItems:"center", width: "400px"}}>
    // PARDI GRAS
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
            width= "70%"
            height="auto" 
            style={{ margin: "auto", paddingBottom: "10px"}}
          />
          <p style={{paddingBottom: "10px"}}>{slide.description}</p>
        </Carousel.Item>
      ))}
    </Carousel>
    // </div>
  );  

}

export default PGCarousel;