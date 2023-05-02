import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram} from "react-icons/bs";
import { AiFillFacebook} from "react-icons/ai";
import { BsTelegram} from "react-icons/bs";
import Car from "../imgs/Car.png";

import "./Home.css";

export default function Footer() {
  const [isShown, setIsShown] = useState(false);
  const [areShown, setAreShown] = useState(false);
  const [onShown, setOnShown] = useState(false);
  return (
    <div className="footer">
      <div class="justify-center my-holder flex">
        <img src={Car} alt="" class="" />
        <h1 class=" flex flex-wrap py-8 text-white text-xl ml-0 font-bold">
          BusWise
        </h1>
      </div>
      <div class="flex gap-10 mb-6 text-base font-normal justify-center text-white">
        <NavLink
          to="#"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          Overview
          {isShown && (
            <ul class="py-3">
              <li>
                <NavLink to="#">Booking</NavLink>
              </li>
            </ul>
          )}{" "}
        </NavLink>

        <NavLink
          to="#"
          onMouseEnter={() => setAreShown(true)}
          onMouseLeave={() => setAreShown(false)}
        >
          Social Media
          {areShown && (
            <div class="py-3 w-fit">
              <div class="">
                <NavLink to="#">
                  {/* <AiFillTwitterCircle class="w-8 h-8" /> */}
                  Twitter
                </NavLink>
              </div>
              <div class="flex">
                <NavLink to="#">
                  {/* <BsInstagram class="w-8 h-8" />   */}
                  Instagram
                </NavLink>
              </div>
              <div class="flex">
                <NavLink class="flex">
                  {/* <AiFillFacebook class="w-8 h-8"/> */}
                  Facebook
                </NavLink>
              </div>
              <div class="flex">
                <NavLink>
                  {/* <BsTelegram class="w-8 h-8" /> */}
                  Telegram
                </NavLink>
              </div>
            </div>
          )}
        </NavLink>
        <NavLink
          to="#"
          onMouseEnter={() => setOnShown(true)}
          onMouseLeave={() => setOnShown(false)}
        >
          Help
          {onShown && (
            <div class="py-3">
              <div>
                <NavLink to="#">FAQ</NavLink>
              </div>
              <div>
                <NavLink to="#">
                  Contact Customer
                  <br />
                  care Services
                </NavLink>
              </div>
            </div>
          )}
        </NavLink>
      </div>
      ` `
      <hr />
      <div class="div-cont mt-12">
        <div className="wrap-but-inpt ml-10 p-1 bg-white">
          <input
            type="email"
            id="email"
            class="email-input outline-none"
            placeholder="Enter you Email"
            required
          />
          <button className="btn p-2 rounded-lg">Subscribe</button>
        </div>
        <p class="copy">Copyright BusWise@2023</p>
        <AiFillTwitterCircle class="w-6 h-6" />
        <BsInstagram class="w-6 h-6" />
        <AiFillFacebook class="w-6 h-6" />
        <BsTelegram class="w-6 h-6" />
      </div>
    </div>
  );
}
