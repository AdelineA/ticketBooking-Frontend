import React from "react";
import { NavLink } from "react-router-dom";
import dots from "../../imgs/dots.png";


export default function Login() {
  return (
    <div>
      <section class="bg-white">
        <div class="flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <img
              src={dots}
              alt=""
              class="w-20 h-20 bg-white text-white px-2 py-5 mt-6 ml-6"
            />
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl colo">
                SIGN IN
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 sm:text-sm rounded-full block w-full p-2.5"
                    required=""
                  />
                </div>
                <div class="flex">
                  <hr />
                  <label
                    For="setone"
                    class="font-light text-base colo w-full flex"
                  >
                    Forgot Your Password?{" "}
                    <NavLink to="" class="text-base font-bold hover:underline">
                      SetOne
                    </NavLink>
                  </label>
                  <hr />
                </div>
                <div class="flex gap-5">
                  <button
                    type="submit"
                    class="w-32 text-cyan-900 font-medium rounded-full text-sm px-6 border-2 border-cyan-900 py-2.5 text-center bg-white "
                  >
                    Sign In
                  </button>
                  <button
                    type="submit"
                    class="w-32 text-white font-medium rounded-full text-sm px-6 py-2.5 text-center bg-cyan-900 "
                  >
                    Log In
                  </button>
                </div>
                <div class="flex items-start">
                  <label
                    For="setone"
                    class="font-light text-base colo w-full text-center "
                  >
                    Or
                  </label>
                </div>
                <div class="flex gap-5">
                  <button
                    type="submit"
                    class="w-fit text-cyan-900 font-medium rounded-full text-sm px-3 border-2 border-cyan-900 py-2 text-center bg-white "
                  >
                    Continue with Facebook
                  </button>
                  <button
                    type="submit"
                    class="w-fit text-cyan-900 font-medium rounded-full text-sm px-3 border-2 border-cyan-900 py-2 text-center bg-white "
                  >
                    Continue with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
