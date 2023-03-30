import React from "react";
import { NavLink } from "react-router-dom";
import Car from "../imgs/Car.png";
import "./Home.css";

export default function Navigation() {
  return (
    <div>
      <nav className="fixed left-0 right-0 top-0 mb-4">
        <div class="nav py-2 text-white">
          <div class="px-0.5 pt-0.5 lg:px-8 ">
            <nav class="flex items-center">
              <div class="flex lg:flex-1">
                <img
                  src={Car}
                  class="w-10 float-left ml-16 rounded-lg"
                  alt=""
                />
                <span class="text-white mt-3 font-bold">BusWise</span>
              </div>
              <div class="hidden lg:flex lg:gap-x-12 font-bold">
                <NavLink
                  to="#"
                  class="text-base text-white font-bold"
                >
                  Home
                </NavLink>

                <NavLink
                  to="#"
                  class="text-base text-white font-bold"
                >
                  About
                </NavLink>
                <NavLink
                  to="#"
                  class="text-base text-white font-bold"
                >
                  Contact
                </NavLink>
              </div>
              <div class="flex lg:flex lg:flex-1 lg:justify-end font-bold mr-10 ">
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                <NavLink
                  to="#"
                  class="text-base text-white font-bold "
                >
                  Log in 
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
}
