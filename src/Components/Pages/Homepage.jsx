import React from 'react'
import Navigation from '../Navigation'
import Home from '../Home'
import Services from './Services'
import Footer from '../Footer'
import Busbook from '../Busbook'

export default function Homepage() {
  return (
    <div>
        <Navigation/>
        <Home/>
        <Services/>
        <Busbook/>
        <Footer/>
    </div>
  )
}
