import React from 'react'
import "./home.scss"

const Home = () => {
  return (
    // Page Div
    <div className="home">

      {/* Left side of page */}
      <div className="left">
        <h1>Welcome!</h1>
        <p>Congratulations on your pregnancy! Get started by finding a Māori Midwife near you today.</p>
        <img src="../../assets/images/1.png" alt="imageOne" />
        <p>Select your region</p>
      </div>

      {/* Right side of page */}
      <div className="right">
        <img src="../../assets/images/nzMapWhite.png" alt="nzMapWhite" />

      </div>
    </div>
  )
}

export default Home