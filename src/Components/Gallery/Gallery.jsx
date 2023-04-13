import React from "react";
import "./css/gallery.css";
import "./css/gallery.css";
import Carousel from "react-bootstrap/Carousel";
import haircut1 from '../img/haircut1.png';
import haircut4 from '../img/haircut4.png';
import izzycut1 from '../img/izzycut1.png';
import mariahcut1 from '../img/mariahcut1.png';

const Gallery = () => {
  return (
    <div className="Gallery-section">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <style>@importurl('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');</style>
      <h1 className="Gallery-header">Gallery</h1>
      {/* Slide Carousel */}
      <Carousel id="Gallery-carousel">
        {/* Haircut #1 */}
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={haircut1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>High Fade</h3>
            <p>By Abdiel</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Haircut #2 */}
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={izzycut1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>High Fade</h3>
            <p>By Abdiel</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Haircut #3 */}
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={mariahcut1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Low Taper</h3>
            <p>By Izzy</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Haircut #4 */}
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src={haircut4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Fade</h3>
            <p>
              By Mariah
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Gallery;
