import React from "react";
import Person from "../imgs/Person.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


export default function Home() {
  const [attribute, setAttribute] = useState([]);
  const [selectedAgency, setSelectedAgency] = useState("");
  const [trips, setTrips] = useState("");
  const [section, setSection] = useState("book");
  const fetchAttribute = async () => {
    try {
      const res = await axios.get(
        "https://shy-gray-wombat-gear.cyclic.app/api/agency/all"
      );
      setAttribute(res.data.data);
    } catch (error) {}
  };

  const fetchTripAttribute = async (selectedAgency) => {
    try {
      const res = await axios.get(
        `https://shy-gray-wombat-gear.cyclic.app/api/trip/all/${selectedAgency}`
      );
      setTrips(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAgencyChange = (event) => {
    setSelectedAgency(event.target.value);
    fetchTripAttribute(event.target.value);
  };

  useEffect(() => {
    fetchAttribute();
  }, []);
  const Navigate = useNavigate();
  return (
    <div>
      <div className="photo">
        <div className="flex ml-32">
          <div className="mt-36 mb-15 w-full">
            <h1 className="colo text-2xl font-bold w-full">
              Welcome To Our Bus Booking System
            </h1>
            <p className="mt-2 text-xl font-normal ">
              The ultimate solution for hasle-free
              <br />
              Bus ticket booking!
            </p>
            <NavLink to="signup">
              <button className="text-center border-2 w-32 h-12 text-lg colo mt-6 font-bold hover:bg-cyan-950 hover:text-black ">
                Book Now
              </button>
            </NavLink>
          </div>
          <div className="mt-28">
            <img src={Person} alt="" className="p-0" />
          </div>
        </div>
      </div>
      <div className="w-fit border-4 rounded-lg ml-52 div3">
        <div className="flex uppercase">
          <div
            className={`px-6 py-3 ml-10  cursor-pointer ${ section === "book" ? "" : "div2 text-white"}`}
            onClick={() => setSection("book")}
          >
            <h1 className="">Book a ticket</h1>
          </div>
          <div className="flex ml-32 border rounded-lg">
            <div
              className={`px-14 py-3 cursor-pointer ${ section === "status" ? "" : "div2 text-white" }`}
              onClick={() => setSection("status")}
            >
              <h2 className="">booking status</h2>
            </div>
            <div
              className={`px-14 py-3 ml-10 cursor-pointer ${section === "ticket" ? "" : "div2 text-white"}`}
              onClick={() => setSection("ticket")}
            >
              <h3 className="">my tickets</h3>
            </div>
          </div>
        </div>
        {/* FIRST PAGE START*/}
        {section === "book" && (
          <>
            <div className="flex mt-10 ml-8">
              <select
                id="cities"
                className="border text-base rounded-lg border-gray-900 block outline-none w-48 px-6 py-2 "
                onChange={handleAgencyChange}
              >
                <option defaultValue>Agency</option>
                {attribute &&
                  attribute.map((agency) => (
                    <option value={agency.name} key={agency._id}>
                      {agency.name}
                    </option>
                  ))}
              </select>

              <select
                id="cities"
                class="border text-base rounded-lg border-gray-900 block outline-none w-48 ml-16 px-6 py-2 "
              >
                <option selected>Nbr of Tickets</option>
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
                <option defaultValue>From :</option>
                {trips &&
                  trips
                    .reduce(
                      (uniqueTrips, currentTrip) =>
                        uniqueTrips.find((t) => t.from === currentTrip.from)
                          ? uniqueTrips
                          : [...uniqueTrips, currentTrip],
                      []
                    )
                    .map((trip) => (
                      <option value={trip.from} key={trip._id}>
                        {trip.from}
                      </option>
                    ))}
              </select>
              <select
                id="cities"
                class=" border text-base rounded-lg border-gray-900 block w-48 mb-3 px-6 py-2 ml-16 outline-none"
              >
                <option defaultValue>To :</option>
                {trips &&
                  trips
                    .reduce(
                      (uniqueTrips, currentTrip) =>
                        uniqueTrips.find((t) => t.to === currentTrip.to)
                          ? uniqueTrips
                          : [...uniqueTrips, currentTrip],
                      []
                    )
                    .map((trip) => (
                      <option value={trip.to} key={trip._id}>
                        {trip.to}
                      </option>
                    ))}
              </select>
              <button
                onClick={() => Navigate("/getTicket")}
                class=" text-center text-white text-base ml-16 mb-3 px-5 py-3 w-48 border div2"
              >
                Get Ticket
              </button>
            </div>
          </>
        )}

        {/* FIRST PAGE END */}

        {/* SECOND PAGE START */}
        {section === "status" && (
          <div class="flex gap-5">
            <label className="relative">
              <input
                type=""
                className="w-[320px] h-[65px] mt-8 ml-5 bg-white border-2 rounded-lg border-[#4C747A] border-opacity-50 outline-none focus:text-[#4C747A] transition duration-100"
              />
              <span className="text-2xl text-[#4C747A] absolute left-0 top-10 mx-2 px-6">
                All Ticket
                <h1 class="absolute  top-1 bottom-2 ml-64 ">5</h1>
              </span>
            </label>
            <label className="relative">
              <input
                type=""
                className="w-[320px] h-[65px] mt-8 ml-5 bg-white border-2 rounded-lg border-[#4C747A] border-opacity-50 outline-none focus:text-gray-900 transition duration-100"
              />
              <span className="text-2xl text-[#4C747A] absolute left-0 top-10 mx-2 px-6 ">
                Expired
                <h1 class="absolute  top-1 bottom-2 ml-64 ">7</h1>
              </span>
            </label>
            <label className="relative">
              <input
                type="text"
                className="w-[320px] h-[65px] mt-8 ml-5 bg-white border-2 rounded-lg border-[#4C747A]  border-opacity-50 outline-none focus:text-gray-900 transition duration-100"
              />
              <span className="text-2xl text-[#4C747A] absolute left-0 top-10 mx-3 px-6 ">
                Active
                <h1 class="absolute  top-1 bottom-2 ml-64 ">10</h1>
              </span>
            </label>
          </div>
        )}
        {/* SECOND PAGE START */}

        {/* THIRD PAGE START */}
        {section === "ticket" && (
          <div class="flex mt-10 ml-8">
            <div class="flex justify-between">
              <h1 class="text-[#4C747A] ">Kigali</h1>
              <h1 className="ml-16 mr-16 text-[#4C747A] ">to</h1>
            </div>

            <div class=" ml-20 mr-20  flex justify-between">
              <h1 class=" text-[#4C747A] ">Rubavu</h1>
            </div>

            <div class="ml-20 mr-20 flex justify-between">
              <h1 class=" text-[#4C747A]  ">View</h1>
              <h1 className="ml-48 mr-48  text-[#4C747A] ">Reschedule</h1>
            </div>
          </div>
        )}
        {/* THIRD PAGE END */}
      </div>
    </div>
  );
}
