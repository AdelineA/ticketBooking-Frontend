import React from 'react'
import Navigation from '../Components/Navigation'
import Home from '../Components/Home'
import Footer from '../Components/Footer'
import Busbook from '../Components/Busbook'

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
