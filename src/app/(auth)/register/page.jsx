import React from "react";
import Image from "next/image";

import Button from "@/components/button/Button";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-screen mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 max-h-screen min-h-full">
          <div className="lg:col-span-4 bg-blue-500">
            <div className="grid place-items-center h-screen">
              <Image
                src="/image/logo-ankasa.png"
                width={350}
                height={350}
                alt="logo ankasa"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="px-16 pt-8">
              <div className="flex gap-3 align-middle">
                <Image
                  src="/image/plane.png"
                  width={40}
                  height={40}
                  alt="logo angkasa"
                />
                <h1 className="font-semibold text-xl">Ankasa</h1>
              </div>
              <div className="pt-16">
                <div>
                  <p className="text-2xl font-semibold py-6">Login</p>
                </div>

                <form action="">
                  <div className="relative z-0 my-10">
                    <input
                      type="text"
                      id="full-name"
                      className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="full-name"
                      className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="relative z-0 my-10">
                    <input
                      type="email"
                      id="user-email"
                      className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="user-email"
                      className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative z-0 my-10">
                    <input
                      type="password"
                      id="password"
                      className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="password"
                      className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password
                    </label>
                  </div>
                  <div>
                    <Button text="Sign In" />
                  </div>
                </form>

                <div className="py-8">
                  <div className="text-center">
                    <div>
                      <p>Did you forgot your password ?</p>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="text-blue-600 underline-offset-4"
                      >
                        Tap here for reset
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
