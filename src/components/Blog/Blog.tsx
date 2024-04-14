import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Blog.scss';

const Blog = () => {
  return (
    <Container>
       <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
          h2 {
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 24px;
          }
          .card {
            transition: transform 0.2s;
          }
          .card:hover {
            transform: scale(1.05);
          }
        `}
      </style>
      <h1 style={{marginTop:'40px'}}>OUR BLOG</h1>
      <hr style={{marginBottom:'40px'}}/>
      <Row>
        <Col md={6}>
          <Card className="blog-card" style={{ marginBottom: '20px' }}>
            <Card.Img variant="top" src="https://images4.alphacoders.com/134/1345029.png" height={400} alt='blog1' />
            <Card.Body>
              <Card.Title id='h2-1' style={{ fontSize: '24px' }}>Blog 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga vel mollitia officiis esse et aliquid, porro animi quaerat optio alias repellat corporis ipsum rem voluptate voluptatem non nisi vitae cupiditate.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="blog-card" style={{ marginBottom: '20px' }}>
            <Card.Img variant="top" src="https://rare-gallery.com/thumbs/108733-girl-fitness-exercise-gym-dumbbells-workout-sportswear-motivation.jpg" height={400} alt='blog2' />
            <Card.Body>
              <Card.Title id='h2-2' style={{ fontSize: '24px' }}>Blog 2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga vel mollitia officiis esse et aliquid, porro animi quaerat optio alias repellat corporis ipsum rem voluptate voluptatem non nisi vitae cupiditate.
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
