import React from 'react'
import Product from '../product/Product'
import FullImg from '../../img/oneshot-min.png'
import './productList.css'

const products = [
    {
        id: 1,
        link: 'showcase.rankuhigher.in',
        img: FullImg,
    },
    {
        id: 1,
        link: 'showcase.rankuhigher.in',
        img: FullImg,
    },
    {
        id: 1,
        link: 'showcase.rankuhigher.in',
        img: FullImg,
    },
    {
        id: 1,
        link: 'showcase.rankuhigher.in',
        img: FullImg,
    },
    {
        id: 1,
        link: 'showcase.rankuhigher.in',
        img: FullImg,
    },
    {
        id: 1,
        link: 'showcase.rankuhigher.in',
        img: FullImg,
    },
]

function ProductList() {
  return (
    <div className="pl">
        <div className="pl-texts">
           <h1 className="pl-title">Create & inspire. It's Lama</h1>
           <p className="pl-desc">Lama is a creative portfolio that your work has been waiting for. Beautiful homes, stunning portfolio styles & a whole lot more awaits inside.</p>
        </div>
        <div className="pl-list">
           {
            products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link}/>
            ))
           }
        </div>
    </div>
  )
}

export default ProductList
