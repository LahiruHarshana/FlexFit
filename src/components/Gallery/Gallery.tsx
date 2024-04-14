import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.scss';

const Gallery = () => {
  return (
    <Container id="gallery" className="gallery-container">
      <h1>GALLERY</h1>
      <hr style={{marginBottom:'90px'}} />
      <Row>
        <Col lg={4} md={12} className="mb-4 mb-lg-0">
          <div className="image-wrapper">
            <img
              src="https://www.pixel4k.com/wp-content/uploads/2019/11/fitness-gym-girl_1574938909.jpg.webp"
              className="image"
              alt="Fitness Gym Girl"
            />
          </div>
          <div className="image-wrapper">
            <img
              src="https://w0.peakpx.com/wallpaper/928/286/HD-wallpaper-gym-lover-motivation-lover-gym-fitness.jpg"
              className="image"
              alt="Gym Lover Motivation"
            />
          </div>
        </Col>
        <Col lg={4} className="mb-4 mb-lg-0">
          <div className="image-wrapper">
            <img
              src="https://e1.pxfuel.com/desktop-wallpaper/957/831/desktop-wallpaper-man-gym-muscle-physical-exercise-human-back-barbell-athletic-gym-men.jpg"
              className="image"
              alt="Man Gym Muscle"
            />
          </div>
          <div className="image-wrapper">
            <img
              src="https://p4.wallpaperbetter.com/wallpaper/91/233/127/cassandra-martin-gym-clothes-gyms-bodybuilder-women-hd-wallpaper-preview.jpg"
              className="image"
              alt="Cassandra Martin Gym Clothes"
            />
          </div>
        </Col>
        <Col lg={4} className="mb-4 mb-lg-0">
          <div className="image-wrapper">
            <img
              src="https://e0.pxfuel.com/wallpapers/572/712/desktop-wallpaper-men-gym-muscle-physical-exercise-sport-workout-fitness.jpg"
              className="image"
              alt="Men Gym Muscle"
            />
          </div>
          <div className="image-wrapper">
            <img
              src="https://e1.pxfuel.com/desktop-wallpaper/146/993/desktop-wallpaper-fitness-motivation-women-workout-on-greepx-womens-gym.jpg"
              className="image"
              alt="Fitness Motivation Women"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
