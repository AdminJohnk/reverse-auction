import React, { Component } from 'react'
import style from './Body.module.css'
import Carousel from './Carousel/Carousel'
import FeaturedCategory from './FeaturedCategory/FeaturedCategory'
import Menu from './Menu/Menu'
import Products from './Products/Products'
import Recommend from './Recommend/Recommend'
import ShockPrice from './ShockPrice/ShockPrice'

export default class Body extends Component {
  render() {
    return (
      <div className={style.body_Home}>
        <Menu/>
        <Carousel/>
        <ShockPrice/>
        <FeaturedCategory/>
        <Recommend/>
        <Products/>
      </div>
    )
  }
}
