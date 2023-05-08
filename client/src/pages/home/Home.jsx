import React from 'react'
import "./home.scss"
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import bg_img from '../../images/MD_wallpaper_1920x1080px.png'

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
          <div className="bullet-point">
            <img src={img1} alt="imageOne" />
            <p>Select your region</p>
          </div>
          <div className="bullet-point">
            <img src={img2} alt="imageTwo" />
            <p>View our midwives</p>
          </div>
          <div className="bullet-point">
            <img src={img3} alt="imageThree" />
            <p>Choose your midwife</p>
          </div>
        </div>

        {/* Right side of page */}
        <div className="right">
          <img src={nzMapWhite} width="350vw" height="500vh" alt="nzMapWhite" />
        </div>
      </div>
    </div>
  )
}

export default Home