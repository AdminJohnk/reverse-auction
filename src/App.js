import React, { Component } from 'react'
import Body from './components/index/Body/Body'
import Footer from './components/index/Footer/Footer'
import Header from './components/index/Header/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}
