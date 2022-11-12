import React, { Component } from 'react'
import style from './ShockPrice.module.css'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


export default class ShockPrice extends Component {
    render() {
        return (
            <div className={style.shockPrice}>
                <div className={style.product}>
                    <div className={style.text}>
                        <span className={style.left}>
                            <span>Shock Price Today</span>
                            <img src='image/index/lighting.svg' alt='lighting' />
                            <div className={style.hour}>
                                <span className={style.time}>00</span> <span className={style.gap}> : </span>
                                <span className={style.time}>00</span> <span className={style.gap}> : </span>
                                <span className={style.time}>00</span>
                            </div>
                        </span>
                        <span className={style.right}>See more</span>
                    </div>
                    <div className={style.productItem + " shockPrice__carousel mt-2"}>
                        <OwlCarousel
                            className="owl-theme"
                            loop
                            margin={10}
                            items={4}
                            autoplay={true}
                            dots={false}
                            responsiveClass={true}
                            responsive={{
                                0: {
                                    items: 1,
                                },
                                900: {
                                    items: 3,
                                },
                                1000: {
                                    items: 4,
                                }
                            }}

                        >
                        <div className={style.item + " item"}>
                            <img src='image/index/PriceShock/item1.png' alt='item1' />
                            <div className={style.price}>
                                853,414.63 VND
                            </div>
                            <div className={style.old_Price}>
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>

                        </div>
                        <div className={style.item + " item"}>
                            <img src='image/index/PriceShock/item2.png' alt='item1' />
                            <div className={style.price}>
                                853,414.63 VND
                            </div>
                            <div className={style.old_Price}>
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className={style.item + " item"}>
                            <img src='image/index/PriceShock/item3.png' alt='item1' />
                            <div className={style.price}>
                                853,414.63 VND
                            </div>
                            <div className={style.old_Price}>
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className={style.item + " item"}>
                            <img src='image/index/PriceShock/item4.png' alt='item1' />
                            <div className={style.price}>
                                853,414.63 VND
                            </div>
                            <div className={style.old_Price}>
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className={style.item + " item"}>
                            <img src='image/index/PriceShock/item5.png' alt='item1' />
                            <div className={style.price}>
                                853,414.63 VND
                            </div>
                            <div className={style.old_Price}>
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className={style.item + " item"}>
                            <img src='image/index/PriceShock/item6.png' alt='item1' />
                            <div className={style.price}>
                                853,414.63 VND
                            </div>
                            <div className={style.old_Price}>
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className={style.item + " item"}>
                            <img src='image/index/PriceShock/item7.png' alt='item1' />
                            <div className={style.price}>
                                853,414.63 VND
                            </div>
                            <div className={style.old_Price}>
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className={style.item + " item"}>
                            <img src='image/index/PriceShock/item8.png' alt='item1' />
                            <div className={style.price}>
                                853,414.63 VND
                            </div>
                            <div className={style.old_Price}>
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className={style.item + " item"}>
                            <img src='image/index/PriceShock/item9.png' alt='item1' />
                            <div className={style.price}>
                                853,414.63 VND
                            </div>
                            <div className={style.old_Price}>
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        <div className={style.item + " item"}>
                            <img src='image/index/PriceShock/item10.png' alt='item1' />
                            <div className={style.price}>
                                853,414.63 VND
                            </div>
                            <div className={style.old_Price}>
                                <span>2,926,829.27 VND</span>
                                <span>71% off</span>
                            </div>
                        </div>
                        </OwlCarousel>
                    </div>
                </div>
                <div className={style.pattern_product}>
                    <img className='img-fluid' src='image/index/PriceShock/pattern.png' alt='pattern'/>
                </div>
            </div >
        )
    }
}
