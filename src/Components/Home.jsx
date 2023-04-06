import React from "react";
import Person from '../imgs/Person.png'
// import Cards from "./Cards";
import { NavLink } from "react-router-dom";
import "./Home.css";


export default function Home() {
  return (
    <div>
      <div class="photo">
        <div class="flex ml-32">
          <div class="mt-36 mb-15 w-full">
            <h1 class="colo text-2xl font-bold w-full">
              Welcome To Our Bus Booking System
            </h1>
            <p class="mt-2 text-xl font-normal ">
              The ultimate solution for hasle-free<br/>
              Bus ticket booking!
            </p>
            <button class="text-center border-2 w-28 h-8 text-sm colo mt-6 font-semibold hover:bg-cyan-950 hover:text-white ">
              Sign Up
            </button>
          </div>
          <div class="mt-28">
            <img src={Person} alt="" class="p-0"/>
          </div>
        </div>
      </div>
      <div class="w-fit border-4 rounded-lg ml-52 div3">
        <div class="flex uppercase">
          <div class="px-6 py-3 ml-10 colo ">
            <NavLink to="">Book a ticket</NavLink>
          </div>
          <div class="div2 text-white flex ml-32 border rounded-lg">
            <div class="px-14 py-3">
              <NavLink to="">booking status</NavLink>
            </div>
            <div class="px-14 py-3 ml-10">
              <NavLink to="">my tickets</NavLink>
            </div>
          </div>
        </div>
        <div class="flex mt-10 ml-8">
          <select
            id="cities"
            class="border text-base rounded-lg border-gray-900 block outline-none w-48 px-6 py-2 "
          >
            <option selected>Agency</option>
            <option value="RW">Volcano</option>
            <option value="RW">Virunga</option>
            <option value="RW">Stella</option>
            <option value="RW">Capital</option>
            <option value="RW">RITCO</option>
          </select>
          <select
            id="cities"
            class="border text-base rounded-lg border-gray-900 block outline-none w-48 ml-16 px-6 py-2 "
          >
            <option selected>Nbr of Tickets</option>
            <option value="RW">0</option>
            <option value="RW">1</option>
            <option value="RW">2</option>
            <option value="RW">3</option>
            <option value="RW">4</option>
            <option value="RW">5</option>
          </select>
          
          <div class="w-fit text-center px-5 py-2.5 mr-10 ml-16 rounded-lg block border border-gray-900 ">
            <input type="date" class="text-gray-900 outline-none" />
          </div>
        </div>
         <div class="flex mt-4 ml-8 mb-5">
          <select
            id="cities"
            class="border text-base rounded-lg border-gray-900 block outline-none mb-3 w-48 px-6 py-2 "
          >
            <option selected>From :</option>
            <option value="RW">Kigali</option>
            <option value="RW">Rubavu</option>
            <option value="RW">Musanze</option>
            <option value="RW">Rusizi</option>
            <option value="RW">Nyanza</option>
            <option value="RW">Gisagara</option>
            <option value="RW">Huye</option>
            <option value="RW">Karongi</option>
            <option value="RW">Nyamasheke</option>
            <option value="RW">Rutsiro</option>
            <option value="RW">Gatsibo</option>
            <option value="RW">Nyagatare</option>
            <option value="RW">Rwamagana</option>
            <option value="RW">Gicumbi</option>
            <option value="RW">Kayonza</option>
            <option value="RW">Kirehe</option>
            <option value="RW">Muhanga</option>
            <option value="RW">Ruhango</option>
            <option value="RW">Ngororero</option>
            <option value="RW">Nyabihu</option>
          </select>
          <select
            id="cities"
            class=" border text-base rounded-lg border-gray-900 block w-48 mb-3 px-6 py-2 ml-16 outline-none"
          >
            <option selected>To :</option>
            <option value="RW">Kigali</option>
            <option value="RW">Rubavu</option>
            <option value="RW">Musanze</option>
            <option value="RW">Rusizi</option>
            <option value="RW">Nyanza</option>
            <option value="RW">Gisagara</option>
            <option value="RW">Huye</option>
            <option value="RW">Karongi</option>
            <option value="RW">Nyamasheke</option>
            <option value="RW">Rutsiro</option>
            <option value="RW">Gatsibo</option>
            <option value="RW">Nyagatare</option>
            <option value="RW">Rwamagana</option>
            <option value="RW">Gicumbi</option>
            <option value="RW">Kayonza</option>
            <option value="RW">Kirehe</option>
            <option value="RW">Muhanga</option>
            <option value="RW">Ruhango</option>
            <option value="RW">Ngororero</option>
            <option value="RW">Nyabihu</option>
          </select>
          <button class=" text-center text-white text-base ml-16 mb-3 px-5 py-3 w-48 border div2">
            Get Ticket
          </button>
        </div>
        
      </div>
      {/* <div class="px-8 ">
        <h2 class=" font-bold uppercase text-lg mt-10 mb-3 colo">Testimonies</h2>
        <div class="flex gap-7 mt-6">
        {
        Cards.map((card)=>{
          return(
            <div class="max-w-sm px-4 py-6 rounded-lg overflow-hidden mt-10 testimony ">
            <img class="w-20 h-20 justify-center rounded-full adel" src={card.img} alt="Adel"/>
            <div class="px-6 py-4">
              <p class="text-white text-base pt-8">
                {card.paragraph}
              </p>
            </div>
          </div>
          )
        })
       }
        </div>
       
      </div> */}
    </div>
  );
}
