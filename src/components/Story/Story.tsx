import React from 'react';
import './Story.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const Story = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-12'>
          <div className='img'>
          </div>
        </div>
        <div className='col-lg-6 col-md-12'>
          <div className='text'>
            <div className='story-text'>
              <h1>OUR STORY</h1>
              <p>Our mission is to provide an affordable, high-quality gym experience that motivates our clients to achieve their fitness goals. We believe that everyone should have the opportunity to live a healthy life, and we are committed to making this a reality for all our members.</p>
              <button className='btn btn-primary'>READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
