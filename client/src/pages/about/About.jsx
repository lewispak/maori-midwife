import React from 'react'
import "./about.scss"
import img1 from '../../images/1.png'

const About = () => {
  return (
    <div className="about">

      {/* Header */}
      <div className="head">
        <h2>About Us</h2>
      </div>

      {/* Content Section */}
      <div className="content">

        <div className="left-content">
          <img src={img1} alt="tempImg" />
        </div>

        <div className="right-content">

        </div>
      </div>
    </div>
  )
}

export default About