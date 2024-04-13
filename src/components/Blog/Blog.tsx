import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Blog = () => {
  return (
    <Container>
      <h1 style={{textAlign:'center'}}>Our Blog</h1>
      <Row>
        <Col>
        <div>
          <h1>
            Blog 1
          </h1>
        </div>
        </Col>

        <Col>
        <div>
          <h1>
            Blog 2 
          </h1>
        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
