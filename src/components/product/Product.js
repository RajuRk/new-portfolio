import React from 'react'
import './product.css'
import {FaGithub} from "react-icons/fa";

function Product({img,link,githubLink}) {
  return (
    <>
      <div className="p">
      <div className="p-browser">
        <div className='p-dots'>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <div className="p-github">
          <a href={githubLink} target="_blank" rel="noreferrer">
            <FaGithub/>
          </a>
        </div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img"/>
      </a>
      </div>
    </>
  )
}

export default Product