import React, { Component } from 'react'
import style from './Header.module.css'

export default class Header extends Component {
  render() {
    return (
      <div className={style.header + ' header container-fluid'}>
        <div className={style.top + ' top'}>
          <div className={style.logo + ' logo'}>
            <img src='https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png' alt='Logo' />
          </div>
          <div className={style.search + ' search'}>
            <input type='text' placeholder='Link or name of product you want to search...' />
            <button>
              <img src='image/index/akariconssearch.svg' alt='user' />
              <span>Search</span>
            </button>
          </div>
          <div className={style.account_cart + ' account_cart'}>
            <div className={style.account + ' account me-5'}>
              <div className={style.login + ' login'}>
                <img className="profile-icon me-2" src="https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png" alt='Login' />
                <div className={style.login_account + ' login_account'}>
                  <span className='text-white'>
                    Sign in / Sign out
                  </span>
                  <span className='text-white' style={{ fontSize: '14px', fontWeight: "400" }}>
                    Account
                  </span>
                </div>
              </div>
            </div>
            <div className={style.cart + ' cart'}>
              <div className={style.images_cart + ' images_cart'}>
                <img className='me-0' src='image/index/cart.png' alt='cart' />
              </div>
              <span>Cart</span>
            </div>
          </div>
        </div>
        <div className={style.bottom + ' bottom'}>
          <span>Laptop</span>
          <span>Television</span>
          <span>Motor</span>
          <span>Car</span>
          <span>Smartphone</span>
          <span>Shoes</span>
        </div>
      </div>
    )
  }
}
