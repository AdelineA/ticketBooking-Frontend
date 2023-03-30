import React from "react";
import Person from '../imgs/Person.png'
import Cards from "./Cards";
import { NavLink } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div class="px-14">
      <div class="flex mt-32  ">
        <div class="flex-col">
          <h1 class="colo text-2xl font-bold">
            Welcome To Our Bus Booking System
          </h1>
          <p class="mt-6 text-xl font-normal ">
            The ultimate solution for hasle-free
          </p>
          <p class="text-xl font-normal ">Bus ticket booking!</p>
          <button class="text-center border-2 w-28 h-8 text-sm colo mt-8 font-semibold ">
            Book Now
          </button>
        </div>
        <div class="ml-5">
          <img src={Person} alt="" class="person"/>
        </div>
      </div>
      <div class="w-fit border-2 ml-52 div3">
        <div class="flex uppercase">
          <div class="px-6 py-3 colo ">
            <NavLink to="">Book a ticket</NavLink>
          </div>
          <div class="div2 text-white flex ml-6 border rounded-lg">
            <div class="px-14 py-3">
              <NavLink to="">my trips</NavLink>
            </div>
            <div class="px-14 py-3">
              <NavLink to="">Booking status</NavLink>
            </div>
            <div class="px-14 py-3 schedule">
              <NavLink to="#" class="flex flex-wrap">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </span>
                schedule
              </NavLink>
            </div>
          </div>
        </div>
        <div class="flex colo px-8 mt-8">
          <div class="flex items-center ">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4  "
            />
            <label for="default-radio-1" class="ml-2 text-sm font-medium col">
              One Way
            </label>
          </div>
          <div class="flex items-center ml-6">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 "
            />
            <label for="default-radio-2" class="ml-2 text-sm font-medium col">
              Multi-City
            </label>
          </div>
        </div>
        <div class="flex mt-4 ml-8 ">
          <select
            id="cities"
            class="border text-base rounded-lg border-gray-900 block w-fit px-6 py-2 "
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
            class=" border text-base rounded-lg border-gray-900 block w-fit px-6 py-2 ml-4"
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
          <div class="w-fit text-center px-6 py-3 mr-10 ml-8 rounded-lg block border border-gray-900 ">
            <input type="date" class="text-gray-900" />
          </div>
        </div>
        <div>
          <button class="text-center text-white text-base mb-3 px-6 py-3 border w-fit ml-52 mt-5 rounded-lg div2">
            Show Trips
          </button>
        </div>
      </div>
      <div class="px-8 ">
        <h2 class=" font-bold uppercase text-lg mt-10 mb-3 colo">Testimonies</h2>
        <div class="flex gap-7 mt-6">
        {
        Cards.map((card)=>{
          return(
            <div class="max-w-sm px-4 py-6 rounded-lg overflow-hidden mt-10 testimony ">
            <img class="w-20 h-20 justify-center rounded-full adel" src={card.img} alt="Sunset in the mountains"/>
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
       
      </div>
    </div>
  );
}
