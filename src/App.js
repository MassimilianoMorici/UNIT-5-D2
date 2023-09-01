import React, { Component } from 'react'
import { Navigations } from './components/navbar/Navigations'
import { navLinks } from './data/navLinks'
import { MyFooter } from './components/footer/MyFooter'
import MyMain from './components/main/MyMain'


export default class App extends Component {



  render() {
    return (

      <>
        <Navigations links={navLinks} />
        <MyMain />
        <MyFooter />
      </>
    )
  }
}
