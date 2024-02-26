import React from "react";
import gretAward from ".//img/gretAward.jpg"
import gretPresent from ".//img/gretPresent.jpg"
import momGret from ".//img/momGret.jpg"

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={gretAward} width="25%" height="25%" alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={gretPresent} width="25%" height="25%" alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={momGret} width="25%" height="25%" alt="Third slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
</div>
  )
}

export default Carousel;
