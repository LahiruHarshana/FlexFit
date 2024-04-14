import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Blog.scss';

const Blog = () => {
  return (
    <Container id='blog'>
       <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
          h2 {
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 24px;
          }
          .blog-card {
            border: none;
            border-radius: 10px;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .blog-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
          }
          .card-img-top {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
        `}
      </style>
      <h1 style={{marginTop:'40px'}}>OUR BLOG</h1>
      <hr style={{marginBottom:'40px'}}/>
      <Row>
        <Col md={6}>
          <Card className="blog-card" style={{ marginBottom: '20px' }}>
            <Card.Img variant="top" src="https://images4.alphacoders.com/134/1345029.png" height={400} alt='blog1' className="card-img-top" />
            <Card.Body>
              <Card.Title id='h2-1'>Blog 1</Card.Title>
              <Card.Text>
                Explore our blog for quick bursts of knowledge and inspiration. With concise articles and practical advice, we aim to make learning effortless and enjoyable. Whether you're on a coffee break or waiting for the bus, our blog is your go-to source for valuable insights on the go.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="blog-card" style={{ marginBottom: '20px' }}>
            <Card.Img variant="top" src="https://rare-gallery.com/thumbs/108733-girl-fitness-exercise-gym-dumbbells-workout-sportswear-motivation.jpg" height={400} alt='blog2' className="card-img-top" />
            <Card.Body>
              <Card.Title id='h2-2'>Blog 2</Card.Title>
              <Card.Text>
                Welcome to our blog! Here, you'll find bite-sized insights, handy tips, and inspiring stories to brighten your day and broaden your horizons. From quick reads to thought-provoking content, we've got something for everyone. So, grab a cup of coffee and enjoy a quick dose of inspiration!
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
