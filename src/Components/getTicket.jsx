import React from "react";
import { useState } from "react";
import axios from "axios";
import Person from "./Person.png";

import { NavLink } from "react-router-dom";
export default function Get() {
  const [element, setElement] = useState({
    agency: "",
    from: "",
    to: "",
    numberOfTickets: "",
    departureTime: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://shy-gray-wombat-gear.cyclic.app/api/ticket/create", {
      agency: element.agency,
      from: element.from,
      to: element.to,
      numberOfTickets: element.numberOfTickets,
      departureTime: element.departureTime,
    });
  };

  return (
    <div>
      <section class="c1 ml-32 ">
        <div class="flex items-center justify-center px-1 py-10 mx-auto md:h-screen lg:py-0 c3">
          <div class="w-[365px] h-[500px] row"></div>
          <div class="flex-col absolute mr-96 rounded-lg  bg-white shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4  md:space-y-6 sm:p-8">
              <form>
                <div className="flex gap-2 ">
                  <h1 class=" text-black text-font-bold  md:text-2xl mb-10">
                    Confirm Payment
                  </h1>
                  <div className="flex ml-1 p-3">
                    <img
                      src="https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-Free-Download-PNG.png"
                      alt=""
                      class="w-[40px] h-[30px] "
                    />
                    <img
                      src="https://pluspng.com/img-png/mastercard-logo-png-mastercard-logo-png-1456.png"
                      alt=""
                      class="w-[40px] h-[30px] "
                    />
                    <img
                      src="https://th.bing.com/th/id/R.da39ff6b8edb3821e9ab153c0ac426f4?rik=N%2frRrkaiQGCzBg&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f03%2fAmerican_Express_logo_logotype_emblem.png&ehk=9Di8KpI96amJvsK8OT2gXz7pCsduccf1SMgIRdRgnkI%3d&risl=&pid=ImgRaw&r=0"
                      alt=""
                      class="w-[35px] h-[30px] "
                    />
                    <img
                      src="https://th.bing.com/th/id/R.9f20b0c84381907ce0930b274ced1662?rik=aOG1TP%2b1%2fDbfKg&riu=http%3a%2f%2fmegagames.com%2fsites%2fdefault%2ffiles%2fgame-content-images%2fpaypal_logo.png&ehk=dYaZiClAO1QnkMWL38%2flzWXYRoWIZ07dZqxCAaaEui0%3d&risl=&pid=ImgRaw&r=0"
                      alt=""
                      class="w-[45px] h-[30px] "
                    />
                  </div>
                </div>
                <div>
                  <label className="relative">
                    <input
                      type="text"
                      className="text-4xl h-12 w-96 bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:text-gray-900 transition duration-200"
                    />
                    <span className="text-1xl text-[#4C747A] absolute left-0 bottom-8 mx-3 px-2 transition duration-200 input-text column">
                      NAME ON CARD
                    </span>
                  </label>
                </div>
                <div>
                  <label className="relative">
                    <input
                      type="text"
                      className="text-4xl h-12 w-96 mt-4 bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:text-gray-900 transition duration-100"
                    />
                    <span className="text-1xl text-[#4C747A] absolute left-0 bottom-8 mx-3 px-2 transition duration-200 input-text ">
                      CARD NUMBER
                    </span>
                  </label>
                </div>

                <div class="flex gap-5">
                  <label className="relative">
                    <input
                      type="date"
                      className=" w-40 h-12 mt-4 bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:text-gray-900 transition duration-100"
                    />
                    <span className="text-1xl text-[#4C747A] absolute left-0 bottom-8 mx-3 px-2 transition duration-200 input-text ">
                      EXP DATE
                    </span>
                  </label>
                  <label className="relative">
                    <input
                      type="text"
                      className="h-12 w-40 mt-4 bg-white border-2 rounded-lg border-black border-opacity-50 outline-none focus:text-gray-900 transition duration-100"
                    />
                    <span className="text-1xl text-[#4C747A] absolute left-0 bottom-8 mx-3 px-2 transition duration-200 input-text ">
                      CVV
                    </span>
                  </label>
                </div>
                <div class="flex gap-5 mb-6">
                  <label className="relative">
                    <button className="text-2xl h-12 w-96 text-center bg-[#4C747A] border-2 rounded-lg border-[#4C747A] border-opacity-50 text-white mt-4 ">
                      PAY NOW
                    </button>
                  </label>
                </div>
              </form>
            </div>
          </div>

          <img src={Person} alt="" class="prs" />
        </div>
      </section>
    </div>
  );
}
