import React from "react";
import "./Home.css";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classclasss(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Book() {
  let [categories] = useState({
    Bookaticket: [
      <div>
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
      </div>,
    ],
    bookingstatus: [
      <div>
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
      </div>,
    ],
    mytickets: [
      <div>
        <div class="flex mt-10 ml-8">
          <div class="flex justify-between">
            <h1 class="text-gray-800 ">1.Kigali</h1>
            <h1 classclass="mr-4 ml-12">to</h1>
          </div>

          <div class=" ml-20 mr-20  flex justify-between">
            <h1 class="text-gray-800 ">Rubavu</h1>
          </div>

          <div class="ml-20 mr-20 flex justify-between">
            <h1 class="text-gray-800  ">View</h1>
            <h1 classclass="ml-48 mr-28">Reschedule</h1>
          </div>
        </div>
      </div>,
    ],
  });
  return (
    <div>
      <div classclass="w-full max-w-md px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List classclass="flex space-x-1 rounded-xl">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                classclass={({ selected }) =>
                  classclasss(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels classclass="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                classclass={classclasss(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2"
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      classclass="relative rounded-md p-3 hover:bg-gray-200"
                    >
                      <a
                        href="#"
                        classclass={classclasss(
                          "absolute inset-0 rounded-md",
                          "ring-gray-400 focus:z-10 focus:outline-none focus:ring-2"
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
