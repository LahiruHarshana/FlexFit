import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
  return (
    <Container className='' style={{}} >

      <h1 style={{marginBottom:''}}>GALLERY</h1>
      <hr style={{marginBottom:'100px'}}/>
      <Row>
        <Col lg={4} md={12} className="mb-4 mb-lg-0">
          <img
            src="https://www.pixel4k.com/wp-content/uploads/2019/11/fitness-gym-girl_1574938909.jpg.webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
          <img
            src="https://w0.peakpx.com/wallpaper/928/286/HD-wallpaper-gym-lover-motivation-lover-gym-fitness.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </Col>
        <Col lg={4} className="mb-4 mb-lg-0">
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/957/831/desktop-wallpaper-man-gym-muscle-physical-exercise-human-back-barbell-athletic-gym-men.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />
          <img
            src="https://p4.wallpaperbetter.com/wallpaper/91/233/127/cassandra-martin-gym-clothes-gyms-bodybuilder-women-hd-wallpaper-preview.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </Col>
        <Col lg={4} className="mb-4 mb-lg-0">
          <img
            src="https://e0.pxfuel.com/wallpapers/572/712/desktop-wallpaper-men-gym-muscle-physical-exercise-sport-workout-fitness.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/146/993/desktop-wallpaper-fitness-motivation-women-workout-on-greepx-womens-gym.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
