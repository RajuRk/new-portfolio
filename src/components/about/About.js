import React from 'react'
import AboutMe from '../../img/about-me.JPG'
import {FaGithub, FaLinkedin} from "react-icons/fa";
import './about.css'

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={AboutMe} alt="" className="a-img"/>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">I'm a seasoned web developer with 6 years of experience in crafting exceptional websites. With a deep passion for technology and a keen eye for design, I create engaging online experiences that captivate users and drive results. Throughout my career, I have honed my skills in web development, enabling me to deliver cutting-edge solutions that exceed client expectations. From responsive e-commerce platforms to dynamic corporate websites, I thrive on taking on diverse projects and finding innovative solutions. I am dedicated to continuous learning, staying up-to-date with industry trends, and collaborating with cross-functional teams to deliver outstanding results. Let's connect and bring your web development ideas to life!</p>
        <div className='profile-links'>
          <div className='git-icons'>
           <a href="https://github.com/RajuRk" target="_blank" rel="noreferrer"><FaGithub/></a>
          </div>
          <div className="linkedin-icon">
           <a href="https://www.linkedin.com/in/rajkumar-ramasamy-7409ba226/" target='_blank' rel='noreferrer'><FaLinkedin/></a>
          </div>
        </div>
        <a href="https://drive.google.com/file/d/19HhTljmyO6qlW1QouZD_zRGgsJHSDY7B/view?usp=drive_link" target='_blank' rel="noreferrer"><button className='resume-btn'>Resume</button></a>
      </div>
    </div>
  )
}

export default About