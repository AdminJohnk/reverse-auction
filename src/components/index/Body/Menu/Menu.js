import React, { Component } from 'react'
import style from './Menu.module.css'

export default class Menu extends Component {
  render() {
    return (
      <div className={style.menu + ' menu container-fluid'}>
        <ul>
            <li className={style.active + ' active'}>Home</li>
            <li>Electronic</li>
            <li>Fashion</li>
            <li>Health & Beauty</li>
            <li>Sport</li>
            <li>Collectibles and Art</li>
            <li>Industrial equipment</li>
            <li>Motor</li>
            <li>Deals</li>
            <li>Sell</li>
        </ul>
      </div>
    )
  }
}
