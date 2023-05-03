import React from 'react'
import "./home.scss"
import img1 from '../../images/1.png'
import socialIcon from '../../images/social_icon.png'
import nzMapWhite from '../../images/nz_map_white.png'

const Home = () => {
  return (
    // Page Div
    <div className="home">

      {/* Left and right side container */}
      <div className="home-container">

        {/* Left side of page */}
        <div className="left">
          <h1>Welcome!</h1>
          <p>Congratulations on your pregnancy!<br/> Get started by finding a Māori Midwife near you today.</p>
          <div className="bullet-points">
            <img src={img1} alt="imageOne" />
            <img src={socialIcon} alt="social icon"/>
            <p>Select your region</p>
          </div>
        </div>

        {/* Right side of page */}
        <div className="right">
          <img src={nzMapWhite} width="100px" height="100px" alt="nzMapWhite" />
        </div>
      </div>
    </div>
  )
}

export default Home