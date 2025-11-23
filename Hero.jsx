import React from 'react'
import './Hero.css'

import hero from '../Assets/hero.jpg'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hand-icon">
                <p>new </p>
                
            </div>
            <p>collection</p>
            <p>for everyone </p>
          </div>
          <div className="hero-latest-btn">
            <div>View Collection</div>
            
          </div>
        </div>
        <div className="hero-right">
            <img src={hero} alt="" />
        </div>
    </div>
  )
}
export default Hero