import React from 'react'
import Product from '../product/Product'
import Netlifix from '../../img/netlifix.png';
import Food from '../../img/meals.png';
import Ecommerce from '../../img/ecommerce-min.png';
import Blog from '../../img/blog.png';
import Tesla from '../../img/tesla-site.png'
import Aviva from '../../img/aviva.png';
import HTML from '../../img/html.png';
import CSS from '../../img/css-3.png';
import Js from '../../img/js.png';
import ReactImg from '../../img/react.png';
import Node from '../../img/nodejs.png';
import Mongo from '../../img/mongo.webp';
import Mysql from '../../img/mysql.png';
import Wordpress from '../../img/wordpress-logo.png';
import Git from '../../img/git.png';
import Github from '../../img/github.png';
import './productList.css'

const products = [
    {
        id: 1,
        link: 'https://fasteat-raju.netlify.app/',
        githubLink: 'https://github.com/RajuRk/food-recipe.git',
        img: Food,
    },
    {
        id: 2,
        link: 'https://shoping-hub-raju.netlify.app/',
        githubLink: 'https://github.com/RajuRk/ecommerce.git',
        img: Ecommerce,
    },
    {
        id: 3,
        link: 'https://netflix-clone-raju.netlify.app/',
        githubLink: 'https://github.com/RajuRk/netflix-clone.git',
        img: Netlifix,
    },
    {
        id: 4,
        link: 'https://raju-myblog.netlify.app/',
        githubLink: 'https://github.com/RajuRk/Myblog-fullstack.git',
        img: Blog,
    },
    {
        id: 5,
        link: 'https://tesla-site-raju.netlify.app/',
        githubLink: 'https://github.com/RajuRk/Tesla-clever.git',
        img: Tesla,
    },
    {
        id: 6,
        link: 'https://architect-landing.netlify.app/',
        githubLink: 'https://github.com/RajuRk/arch-website.git',
        img: Aviva,
    }
]

const skillList = [
   {
    id: 1,
    img: HTML,
    name: "HTML"
   },
   {
    id: 2,
    img: CSS,
    name: "CSS"
   },
   {
    id: 3,
    img: Js,
    name: "Javascript"
   },
   {
    id: 4,
    img: ReactImg,
    name: "React js"
   },
   {
    id: 5,
    img: Node,
    name: "Node js"
   },
   {
    id: 6,
    img: Mongo,
    name: "Mongodb"
   },
   {
    id: 7,
    img: Mysql,
    name: "Mysql"
   },
   {
    id: 8,
    img: Wordpress,
    name: "Wordpress"
   },
   {
    id: 9,
    img: Git,
    name: "Git"
   },
   {
    id: 10,
    img: Github,
    name: "Github"
   }
]

function ProductList() {
  return (
    <div className="pl">
        <div className="pl-texts" style={{marginBottom: "30px"}}>
           <h1 className="pl-title">My Skills</h1>
        </div>
        <div className="pl-list" style={{marginBottom: "45px"}}>
           {
            skillList.map((item) => (
                <div className="pl-skills">
                 <img src={item.img} alt={item.name}/>
                 <p>{item.name}</p>
                </div>
            ))
           }
        </div>
        <div className="pl-texts">
           <h1 className="pl-title">Projects</h1>
           <p><strong>Credentials</strong></p>
           <p><strong>Blog: </strong> Username: raju | Password: raju</p>
           <p><strong>Netflix Clone: </strong> Username: rajkumarpragmatic@gmail.com | Password: 123456</p>
        </div>
        <div className="pl-list">
           {
            products.map((item) => (
                <>
                  <Product key={item.id} img={item.img} link={item.link} githubLink={item.githubLink}/>
                </>
            ))
           }
        </div>
    </div>
  )
}

export default ProductList
