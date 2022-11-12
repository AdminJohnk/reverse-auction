import React, { Component } from 'react'
import style from './Carousel.module.css'

export default class Carousel extends Component {
    render() {
        return (
            <div className={style.casousel}>
                <div className={style.casousel_content + ' casousel_content'}>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img style={{height:"270px"}} src="image/index/carousel1.png" className="d-block w-100" alt="Carousel1" />
                            </div>
                            <div className="carousel-item">
                                <img style={{height:"270px"}} src="image/index/carousel2.png" className="d-block w-100" alt="Carousel2" />
                            </div>
                            <div className="carousel-item">
                                <img style={{height:"270px"}} src="image/index/carousel3.png" className="d-block w-100" alt="Carousel3" />
                            </div>
                        </div>
                        <button className={style.pre_button + " carousel-control-prev"}  type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className={style.next_button + " carousel-control-next" } type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className={style.casousel_information + ' casousel_information'}>
                    <div className={style.title}>
                    Technology 
                    <br/>
                    without limits
                    </div>
                    <div className={style.content}>
                    The electronics you are looking for are here
                    </div>
                    <button>Shop now <i className="fa fa-arrow-right ms-1"></i></button>
                </div>
            </div>
        )
    }
}
