import React, { Component } from 'react'
import style from './Products.module.css'

export default class Products extends Component {

    render_Products = () => {
        let products = []
        for (let i = 0; i < 18; i++) {
            products.push(
                <div className={style.item}>
                    <img src='image/index/product/product.png' alt='product' />
                    <div className={style.title}>
                        Men's Nike Air Force 1 High Boot Black Anthracite Size 8-14 DA0418-001 New
                    </div>
                    <div className={style.star}>
                        <span className={style.icon}>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </span>
                        <span className={style.number}>(4)
                        </span>
                    </div>
                    <div className={style.price}>
                        $165.00
                    </div>
                </div>
            )
        }
        return products;
    }

    render() {
        return (
            <div className={style.products}>
                {this.render_Products()}
            </div>
        )
    }
}
