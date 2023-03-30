import React from 'react'
import { NavLink } from 'react-router-dom';
import Car from '../imgs/Car.png'
import "./Home.css";

export default function Footer() {
  return (
    <div className='footer'>
        <div class="justify-center my-holder flex">
        <img src={Car} alt="" class="" />
            <h1 class=" flex flex-wrap py-8 text-white text-xl ml-2 font-bold">
             BusWise
           </h1>
        </div>
        <div class="flex gap-10 mb-6 text-base font-normal justify-center text-white">
            <NavLink to="#">Overview</NavLink>
            <NavLink to="#">Social Media</NavLink>
            <NavLink to="#">Help</NavLink>
        </div>
        <hr />
        <div class="div-cont mt-12">
           <div className='wrap-but-inpt  p-1 bg-white'>
            <input type="email" id="email" class="email-input outline-none" placeholder="Enter you Email" required/>
            <button className='btn p-2 rounded-lg'>Subscribe</button>
           </div> 
           <p class="copy">Copyright BusWise@2023</p>
        </div>       
    </div>
  )
}
