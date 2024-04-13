import React from 'react'
import './Hero.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <div className='hero container-fluid'>
      <div className='row'>
        <div className='col-lg-10 col-md-10 mx-auto'>
          <div className='hero-text text-center'>
            <h1>GO HARD OR GO HOME</h1>
            <p>Get fit with our certified trainers. Personalized plans to achieve your goals. Build muscle, improve flexibility, and boost wellness.</p>
            <button className='btn btn-primary'>START TRAINING</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
