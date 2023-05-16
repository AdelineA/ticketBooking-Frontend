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
          <div className="px-6 py-3 ml-10  ">
            <NavLink to="./book">Book a ticket</NavLink>
          </div>
          <div className="div2 text-white flex ml-32 border rounded-lg">
            <div className="px-14 py-3">
              <NavLink to="./Status">booking status</NavLink>
            </div>
            <div className="px-14 py-3 ml-10">
              <NavLink to="./ticket">my tickets</NavLink>
            </div>
          </div>
        </div>
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
          {/* <option value="RW">Volcano</option>
            <option value="RW">Virunga</option>
            <option value="RW">Stella</option>
            <option value="RW">Capital</option>
            <option value="RW">RITCO</option> */}

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
            {/* <tbody> */}
            {/* {attribute.map((r, i) => (
                <tr key={i}>
                  <td>{r.from}</td>
                </tr>
              ))}
            </tbody> */}
            {/* <option value="RW">Kigali</option>
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
            <option value="RW">Nyabihu</option> */}
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
            {/* <tbody>
              {attribute.map((r, i) => (
                <tr key={i}>
                  <td>{r.to}</td>
                </tr>
              ))}
            </tbody> */}
            {/* <option value="RW">Kigali</option>
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
            <option value="RW">Nyabihu</option> */}
          </select>
          <button
            onClick={() => Navigate("/getTicket")}
            class=" text-center text-white text-base ml-16 mb-3 px-5 py-3 w-48 border div2"
          >
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
