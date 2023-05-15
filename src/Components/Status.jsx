import React from "react";

import Person from "../imgs/Person.png";
// import Cards from "./Cards";
import { NavLink } from "react-router-dom";
import "./Home.css";

export default function Status() {
  return (
    <div>
      <div class="photo">
        <div class="flex ml-32">
          <div class="mt-36 mb-15 w-full">
            <h1 class="colo text-2xl font-bold w-full">
              Welcome To Our Bus Booking System
            </h1>
            <p class="mt-2 text-xl font-normal ">
              The ultimate solution for hasle-free
              <br />
              Bus ticket booking!
            </p>
            <NavLink to="signup">
              <button class="text-center border-2 w-28 h-8 text-sm colo mt-6 font-semibold hover:bg-cyan-950 hover:text-white ">
                Sign Up
              </button>
            </NavLink>
          </div>
          <div class="mt-28">
            <img src={Person} alt="" class="p-0" />
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
              <NavLink to="./Status">booking status</NavLink>
            </div>
            <div class="px-14 py-3 ml-10">
              <NavLink to="">my tickets</NavLink>
            </div>
          </div>
        </div>
        <div class="flex mt-10 ml-8">
          <div class="w-fit text-center px-5 py-2.5 rounded-sm h-12 gap-8 border border-gray-900 flex justify-between">
            <h1 class="text-gray-800 " for="All Ticket">
              All Ticket
            </h1>
            <h1 classclass="mr-1 ml-6">5</h1>
          </div>

          <div class="w-fit text-center ml-20 mr-20 px-5 py-2.5 rounded-sm h-12 gap-8 border border-gray-900 flex justify-between">
            <h1 class="text-gray-800 " for="All Ticket">
              Expired
            </h1>
            <h1 classclass="mr-1 ml-6">10</h1>
          </div>

          <div class="w-fit text-center ml-20 mr-20 px-5 py-2.5 rounded-sm h-12 gap-8 border border-gray-900 flex justify-between">
            <h1 class="text-gray-800 " for="All Ticket">
              Active
            </h1>
            <h1 classclass="mr-1 ml-6">7</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
