import React from 'react'
import Me from '../../img/me.JPG'
import './intro.css'

function Intro() {
  return (
    <div className="i">
       <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My Name is</h2>
            <h1 className="i-name">Raj kumar</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">UI/UX Designer</div>
                    <div className="i-title-item">Full Stack Developer</div>
                    <div className="i-title-item">Web Designer</div>
                    <div className="i-title-item">Wordpress Developer</div>
                </div>
            </div>
            <p className="i-desc"> I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.</p>
          </div>
       </div>
       <div className="i-right">
          <img src={Me} alt=""/>
       </div>
    </div>
  )
}

export default Intro
