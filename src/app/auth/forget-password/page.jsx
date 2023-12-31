import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";
import Link from "next/link";

const ForgetPassword = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-screen mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 max-h-screen min-h-full">
          <div className="lg:col-span-4 bg-blue-500 max-md:hidden">
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
                <p className="text-2xl font-semibold py-6">Forgot Password</p>

                <form action="">
                  <div>
                    <div className="relative z-0 my-10">
                      <input
                        type="email"
                        id="user-email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="user-email"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email
                      </label>
                    </div>
                  </div>
                  <Button text="Send" />
                </form>

                <div className="py-4">
                  <div className="text-center text-sm">
                    <p className="mb-2">Youll get message soon on your email</p>
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

export default ForgetPassword;
