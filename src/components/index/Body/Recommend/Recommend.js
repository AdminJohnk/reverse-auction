import React, { Component } from 'react'
import style from './Recommend.module.css'

export default class Recommend extends Component {
    render() {
        return (
            <div className={style.recommend}>
                <div className={style.title}>
                    Recommend for you
                </div>
                <div className={style.product}>
                    <div className={style.item + " " + style.active}>
                        <img src='image/index/Recommend/item1.png' alt='item' />
                        <div className={style.product_name}>
                            Sneakers
                        </div>
                    </div>
                    <div className={style.item}>
                        <img src='image/index/Recommend/item2.png' alt='item' />
                        <div className={style.product_name}>
                        Beauty
                        </div>
                    </div>
                    <div className={style.item}>
                        <img src='image/index/Recommend/item3.png' alt='item' />
                        <div className={style.product_name}>
                        Watchs
                        </div>
                    </div>
                    <div className={style.item}>
                        <img src='image/index/Recommend/item4.png' alt='item' />
                        <div className={style.product_name}>
                        Fishing
                        </div>
                    </div>
                    <div className={style.item}>
                        <img src='image/index/Recommend/item5.png' alt='item' />
                        <div className={style.product_name}>
                        Smartphone
                        </div>
                    </div>
                    <div className={style.item}>
                        <img src='image/index/Recommend/item6.png' alt='item' />
                        <div className={style.product_name}>
                        Collectibles
                        </div>
                    </div>
                    <div className={style.item}>
                        <img src='image/index/Recommend/item7.png' alt='item' />
                        <div className={style.product_name}>
                        Electronics
                        </div>
                    </div>
                    <div className={style.item}>
                        <img src='image/index/Recommend/item8.png' alt='item' />
                        <div className={style.product_name}>
                        Laptops
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
