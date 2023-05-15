import React from "react";
import Adel from "../imgs/Adel.jpg";
export default function About() {
  return (
    <div class=" lg:flex md:flex-1 mt-28 px-10 book">
      <img src={Adel} alt="" class="phone" />
      <div class="gap-2 colo mt-10 mb-10">
        <p class="text-lg font-normal mt-5 ">
          `I recently used Bus Booking System for a group trip and I couldn't be
          happier with the experience. From start to finish, the process was
          seamless and stress-free.`,
        </p>
      </div>
      <img src={Adel} alt="" class="phone" />
      <div class="gap-2 colo mt-10 mb-10">
        <p class="text-lg font-normal mt-5 ">
          `The website was easy to navigate and allowed me to easily compare
          prices and choose the best option for my group.`,
        </p>
      </div>
    </div>
  );
}
