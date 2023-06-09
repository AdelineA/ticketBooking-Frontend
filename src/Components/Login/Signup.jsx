import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Person from '../../imgs/Person.png'



export default function Signup() {
  const [values, setValues]= useState({
    username: '',
    fullName: '',
    email: '',
    password:'',
    phone:''
  })
  const handleChange = (e) =>{
    setValues({...values, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(values)
    axios.post('https://shy-gray-wombat-gear.cyclic.app/api/user/signup',{
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify({values})
    })
    .then(res => res.json())
    .then((data) =>{
      console.log(data)
    })
    .catch(err => console.log(err));
  }
  return (
    <div>
      <section class="c1 ml-32 py-10 ">
        <div class="flex items-center justify-center px-1 py-10 mx-auto md:h-screen lg:py-0 c3">
          <div class="flex-col w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl colo">
                Create an account
              </h1>
              <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
              <div>
                  <label for="name" class="block mb-1 text-xl font-bold colo ">
                    UserName
                  </label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    id="username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label for="name" class="block mb-1 text-xl font-bold colo ">
                    Fullname
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    id="fullName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                    placeholder=""
                    required
                  />
                </div>
                <div>
                  <label for="email" class="block mb-1 text-xl font-bold colo ">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-1 text-xl font-bold colo"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    id="password"
                    class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block mb-1 text-xl font-bold colo"
                  >
                    Phone 
                  </label>
                  <input
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    id="phone_number"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                    placeholder="+2507•••••"
                    required
                  />
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                      required
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="terms" class="font-light text-base colo">
                      I accept the{" "}
                      <NavLink
                        class="font-medium text-base hover:underline "
                        to="#"
                      >
                       Terms and Conditions
                      </NavLink>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-cyan-900 "
                >
                  Create an account
                </button>
                <div class="text-sm font-light colo ">
                  Already have an account?{" "}
               
                  <NavLink
                    to="/login"
                    class="font-bold text-base hover:underline "
                  >
                   Login Here!
                  </NavLink>
                  </div>
              </form>
            </div>
          </div>
          <img src={Person} alt="" class="prs"/>
        </div> 
      </section>
    </div>
  );
}
