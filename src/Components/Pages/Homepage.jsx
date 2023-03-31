import React from 'react'
import Navigation from '../Navigation'
import Home from '../Home'
import Footer from '../Footer'
import Busbook from '../Busbook'

export default function Homepage() {
  return (
    <div>
        <Navigation/>
        <Home/>
        <Busbook/>
        <Footer/>
    </div>
  )
}
