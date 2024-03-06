import React, {useState} from "react";
import { Carousel } from 'react-bootstrap';

import event from "./img/pgScreenShots/event.png";
import gigs from "./img/pgScreenShots/gigs.png";
import home from "./img/pgScreenShots/home.png";
//import map from ".//img/pgScreenShots/map.png"
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
    <div className="container-sm" style={{display: "flex", justifyContent: "center", alignItems:"center", width: "400px"}}>
    <Carousel className="carousel-container"
              activeIndex={index}
              onSelect={handleSelect}
              nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
              style={{display: "flex", justifyContent: "center", alignItems:"center", width: "400px"}}
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
    </div>
  );  

  // return (
  // <Container>
  //   <Carousel interval={7000} data-bs-theme="dark">
  //     <Carousel.Item>
  //       <div className="carousel-item">
  //         <h5 className="text-center">Stay Connected to the Community</h5>
  //         <p className="mx-5 mb-3 lh-sm login-text text-center">
  //           Posts & pics keep event-goers in-the-know about the festivities.
  //         </p>
  //         <img src={home} alt="Home" className="carousel-img" width="70%" height="auto" />
  //       </div>
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <div className="carousel-item">
  //         <h5 className="text-center">Find Your Bearings</h5>
  //         <p className="mx-5 mb-3 lh-sm login-text text-center">
  //           Map pins mark points of interest and your friends' real-time locations.
  //         </p>
  //         <img src={map} alt="Map" className="carousel-img" width="70%" height="auto"/>
  //       </div>
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <div className="carousel-item">
  //         <h5 className="text-center">Get into the Groove</h5>
  //         <p className="mx-5 mb-3 lh-sm login-text text-center">
  //           Plan your night out with an up-to-date NOLA live music calendar.
  //         </p>
  //         <img src={gigs} alt="Gigs" className="carousel-img" width="70%" height="auto"/>
  //       </div>
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <div className="carousel-item">
  //         <h5 className="text-center">Mark Your Calendar</h5>
  //         <p className="mx-5 mb-3 lh-sm login-text text-center">
  //           Create geo-located events and invite your krewe to tag along.
  //         </p>
  //         <img src={event} alt="Event" className="carousel-img" width="70%" height="auto"/>
  //       </div>
  //     </Carousel.Item>
  //   </Carousel>
  // </Container>
  // )
}

export default PGCarousel