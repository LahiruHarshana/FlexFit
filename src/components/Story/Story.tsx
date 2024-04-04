import React from 'react';
import './Story.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Story = () => {
  return (
    <div className='container'>
      <div className='row col-lg-12'>
        <div className='img col-lg-6'>
        </div>
        <div className='text col-lg-6'>
          <div className='story-text'>
            <h1>OUR STORY</h1>
            <p>Our mission is to provide an affordable, high-quality gym experience that motivates our clients to achieve their fitness goals. We believe that everyone should have the opportunity to live a healthy life, and we are committed to making this a reality for all our members.</p>
            <button className='btn'>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
