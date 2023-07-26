import React from 'react'
import heroImage from '../assets/hero-image.jpg'

export const HeroSection = () => {
  return (
    <>
    <div className="hero_section">
      <div className="title">
        <h1>Accounting and Legal Brochure</h1>
      </div>
      <div className="hero_img">
        <img src={heroImage} alt="Accounting and Legal related Image" width={100}/>
      </div>
      
    </div>
    </>
  )
}
