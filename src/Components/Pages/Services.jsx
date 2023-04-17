import React from 'react'
import Courier from '../../imgs/Courier.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Ticket from '../../imgs/Ticket.png'
import ".././Home.css";
import { NavLink } from 'react-router-dom';





export default function Services() {
  return (
    <div class="colo px-10 py-6 ">
        <h1 class="text-xl font-bold mb-6 ">Other Services</h1>
        <div class="flex ml-10 content-center justify-center">
            <img src={Courier}alt="" class="w-80"/> 
            <div class="flex-col ml-10 mt-10">
               <h2 class="text-lg font-semibold">Ticket anywhere</h2>
               <p class="text-base font-normal mt-8">
                Customers can use a ticket service to search for <br/>
                upcoming events, select seats, and purchase<br/>
                tickets securely . Some ticket services may also <br/>
                offer additional features such as ticket insurance,<br/>
                refund protection, and ticket resale.
              </p>
              <NavLink to="service">
                 <BsFillArrowRightCircleFill class="px-4 py-2 w-20 h-20 mt-10"/>
              </NavLink>
            </div>
           
        </div>
        <div class="flex mt-16 content-center justify-center">
          <div class="flex-col mt-24">
               <h2 class="text-lg font-semibold">Ticket reschedule</h2>
               <p class="text-base font-normal mt-8">
               The process for rescheduling a ticket can vary<br/>
               depending on the ticket service provider or event<br/>
               organizer. Some may allow customers to <br/>
               reschedule their tickets online or through a <br/>
               mobile app, while others may require them to <br/>
               contact customer support directly.
              </p>
              <NavLink to="service">
                 <BsFillArrowRightCircleFill class="px-3 py-2 w-20 h-20 mt-10"/>
              </NavLink>
            </div>
            <img src={Ticket} alt="" class="ml-10 w-80" />
        </div>
       
    </div>
  )
}
