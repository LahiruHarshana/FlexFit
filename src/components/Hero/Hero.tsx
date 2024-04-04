import React from 'react'
import './Hero.scss'
import 'bootstrap/dist/css/bootstrap.min.css';



const Hero = () => {
  return (
    <div className='hero col-md-12'>
      <div className='hero-text'>
      <h1>GO HARD OR GO HOME</h1>
      <p>Get fit with our certified trainers. Personalized plans to achieve your goals. Build muscle, improve flexibility, and boost wellness.</p>
      <button className='btn'>START TRAINING</button>
      </div>
    </div>
  )
}

export default Hero
