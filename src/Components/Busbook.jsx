import React from 'react'
import Phone from '../imgs/Phone.png'
import "./Home.css";
import { NavLink } from 'react-router-dom';

export default function Busbook() {
  return (
    <div class="flex mt-28 px-10 book">
        <img src={Phone} alt="" class="phone mt-10 mb-10"/>
        <div class="flex-col ml-48 gap-2 colo mt-10 mb-10">
        <h1 class="font-bold text-xl ">About Us</h1>
        <p class="text-lg font-normal mt-5 ">
           Our platform provides you with real-<br/>
           time information on bus availability <br/>
           and prices, ensuring that you always <br/>
           get the best deal possible. And with <br/>
           our secure payment options, you can <br/>
           rest assured that your transactions are <br/>
           safe and secure.
        </p>
        <NavLink to="about">
          <button class="text-center border-2 w-32 h-10 rounded-lg text-sm mt-10 font-semibold btn">More</button>
        </NavLink>
        
        </div>
       
    </div>
  )
}
