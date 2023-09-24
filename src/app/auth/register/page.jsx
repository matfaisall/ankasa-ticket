"use client";
import axios from "axios";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Button from "@/components/button/Button";
import ButtonOutline from "@/components/button-outline/ButtonOutline";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const BASE_URL = `https://easy-lime-seal-toga.cyclic.app`;

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(`${BASE_URL}/auth/register`, form);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: result.data.message,
        showConfirmButton: false,
        timer: 3000,
      });
      router.push("/auth/login");
      // console.log(result.data.message);
    } catch (error) {
      console.log("error: ", error);
      console.log("ini errornya", error.response.data);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 3000,
      });
    }
    // router.push("/login", { scroll: false });
    // console.log(form);
  };

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
                  <p className="text-2xl font-semibold py-6">Register</p>
                </div>

                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="relative z-0 my-10">
                    <input
                      type="text"
                      id="full-name"
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="full-name"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="relative z-0 my-10">
                    <input
                      type="email"
                      id="user-email"
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="user-email"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative z-0 my-10">
                    <input
                      type="password"
                      id="password"
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="password"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password
                    </label>
                  </div>
                  <div>
                    <Button type="submit" text="Sign Up" />
                  </div>
                </form>

                <div className="flex items-center my-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-white border-blue-600 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Accept terms and condition
                  </label>
                </div>

                <hr />
                <div className="py-4">
                  <div className="text-center">
                    <div>
                      <p>Already have an account ?</p>
                    </div>
                    <div className="mt-4">
                      <ButtonOutline
                        type="button"
                        text="Sign In"
                        navigate="/auth/login"
                      />
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
