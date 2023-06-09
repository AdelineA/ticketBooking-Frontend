import React from "react";
import { NavLink } from "react-router-dom";
import Person from '../../imgs/Person.png'
import {FcGoogle } from "react-icons/fc";
import {GrFacebookOption} from "react-icons/gr";
import './Login.css'



export default function Login() {

  return (
    <div>
      <section class="c1 ml-32 ">
        <div class="flex items-center justify-center px-1 py-10 mx-auto md:h-screen lg:py-0 c3">
          <div class="flex-col w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form class="space-y-4 md:space-y-6" action="#">
              <h1 class="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl mb-16 colo">
                SIGN IN
              </h1>
              <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full block w-full p-2.5 outline-none "
                    placeholder="name@gmail.com"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 sm:text-sm rounded-full block w-full p-2.5 outline-none"
                    required=""
                  />
                </div>
                <div class="flex justify-center align-baseline mt-3 mb-3">
                  <label
                    For="setone"
                    class="font-light text-sm colo w-full flex "
                  >
                   <hr class="border mt-3 mr-3 border-gray-200 w-20"/> Forgot Your Password?{" "}
                    <NavLink to="" class="text-base ml-1 font-bold hover:underline">
                      SetOne
                    </NavLink>
                    <hr class="border mt-3 ml-3 border-gray-200 w-20"/> 
                  </label>
                  <hr />
                </div>
                <div class="flex gap-5">
                <NavLink to="/signup">
                  <button 
                    type="submit"
                    class="w-32 text-cyan-900 font-medium rounded-full text-sm px-6 border-2 border-cyan-900 py-2.5 text-center bg-white "
                  >
                    Sign up
                  </button>
                  </NavLink>
                  <button
                    type="submit"
                    class="w-32 text-white font-medium rounded-full text-sm px-6 py-2.5 text-center bg-cyan-900 ml-8 "
                  >
                    Log In
                  </button>
                </div>
                <div class="flex px-6 mt-3 mb-3">
                  <label
                    For="setone"
                    class="font-light text-base colo w-full text-center flex "
                  >
                    <hr class="border mt-3 mr-3 border-gray-200 w-32"/> Or
                    <hr class="border mt-3 ml-3 border-gray-200 w-32"/>
                  </label>
                </div>
                <div class="flex gap-3 mb-6">
                  <NavLink to="https://en-gb.facebook.com/">
                    <button
                    type=""
                    class="flex w-fit text-cyan-900 font-medium rounded-full text-sm px-1 border-2 border-cyan-900 py-2 text-center bg-white "
                  >
                    <GrFacebookOption class="w-6 h-6"/>  Continue with Facebook
                  </button>
                  </NavLink>
                  <NavLink to="https://accounts.google.com/ServiceLogin?elo=1">
                    <button
                    type=""
                    class="flex w-fit text-cyan-900 font-medium rounded-full text-sm px-1 border-2 border-cyan-900 py-2 text-center bg-white "
                  >
                    <FcGoogle class="w-6 h-6 mr-1"/>Continue with Google
                  </button>
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
