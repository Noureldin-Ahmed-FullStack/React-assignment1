import React, { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default class Layout extends Component {
  render() {
    return (
        <>
        <NavbarComponent />
      <Outlet />
      <Footer />

      </>
    )
  }
}
