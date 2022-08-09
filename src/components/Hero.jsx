import React from 'react'
import heroImg from '../images/New-Project.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-info">
        <h1> A Simple Bookmark Manager</h1>
        <p>A clean and simple interface to organize your favourite websites. Open a new 
          browser tab and see your sites load instantly. Try it for free.</p>
        <div className="btns">
          <button className="btn blue">Get it on Chrome</button>
          <button className="btn grey">Get it on Firefox</button>
        </div>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="hero" />
      </div>
    </div>
  )
}

export default Hero