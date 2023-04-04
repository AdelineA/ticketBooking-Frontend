import React from "react";
import { NavLink } from "react-router-dom";
import Person from '../../imgs/Person.png'

export default function Signup() {
  return (
    <div class="bg-gray-100">
      <section class="bg-white items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 c1 ">
      <div class=" flex">
        <div class="flex flex-col items-center justify-center px-3 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl colo">
                Create and account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="email" class="block mb-2 text-xl font-bold colo ">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-xl font-bold colo"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-xl font-bold colo"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                    required=""
                  />
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                      required=""
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
        </div>
        <img src={Person} alt="" class="prs"/>
        </div>
      </section>
    </div>
  );
}
