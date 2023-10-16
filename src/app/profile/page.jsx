"use client";
import React, { useEffect, useState } from "react";
import NavbarAuth from "@/components/navbar-auth/NavbarAuth";

import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

import Button from "@/components/button/Button";

import { HiMapPin } from "react-icons/hi2";
import { FaRegUserCircle, FaPlaneDeparture } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { AiFillStar, AiTwotoneSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

import Link from "next/link";
import Footer from "@/components/footer/Footer";
import axios from "axios";
import convertDate from "@/utils/convertDate";

const Profile = () => {
  const [profileDetail, setProfileDetail] = useState({});
  const router = useRouter();
  const BASE_URL = process.env.NEXT_PUBLIC_FLIGHT_API;

  useEffect(() => {
    getProfileDetail();
  }, []);

  const getProfileDetail = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/detail`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      });
      console.log("ini response profile", response.data);
      setProfileDetail(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  // logout handler
  const logoutHandler = () => {
    Swal.fire({
      title: "Do you want to logout ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          // showConfirmButton: false,
          icon: "success",
          title: "You have successfully logged out",
        }).then((isConfirm) => {
          if (isConfirm) {
            localStorage.clear();
            router.push("/auth/login");
          }
        });
      }
    });
  };

  return (
    <>
      <NavbarAuth />
      <div className="w-screen bg-gray-100">
        <div className="px-6 lg:px-16 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 justify-center w-full gap-4">
            {/* profile */}
            <div className="sm:col-span-6 lg:col-span-3">
              <div className="w-full bg-white p-4 rounded-lg">
                {/* avatar */}
                <div className="flex justify-center">
                  <div className="border-blue-600 border-2 rounded-full overflow-hidden cursor-pointer">
                    <div className="">
                      <Image
                        src="/image/fakeAvatar.jpg"
                        alt=""
                        className="rounded-full p-1"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
                {/* button, name, location */}
                <div className="flex flex-col items-center">
                  <div className="py-3">
                    <button className="text-blue-600 hover:text-white bg-white border border-blue-600 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3 mr-2 mb-2 focus:outline-none">
                      Select Photo
                    </button>
                  </div>
                  <div>
                    <h2 className="font-semibold text-base text-center">
                      {profileDetail?.data?.name}
                    </h2>
                    <div className="flex flex-row items-center justify-center">
                      <div className="text-blue-600 mr-2">
                        <HiMapPin size={18} />
                      </div>
                      <p className="text-blue-600 text-sm">Medan, Indonesia</p>
                    </div>
                  </div>
                </div>

                {/* card add */}
                <div className="py-4">
                  <div className="py-2 flex flex-row justify-between">
                    <div>
                      <p className="font-semibold text-sm">Cards</p>
                    </div>
                    <div className="text-blue-600 text-sm">
                      <Link href="">+ Add</Link>
                    </div>
                  </div>

                  <div className="w-full bg-blue-600 p-3 rounded-lg shadow-lg">
                    <p className="text-sm text-white">4441 1235 5512 5551</p>
                    <div className="flex flex-row justify-between mt-2">
                      <p className="text-xs text-white font-light">X Card</p>
                      <p className="text-xs text-white font-light">$ 1,440.2</p>
                    </div>
                  </div>
                </div>

                {/* menu */}
                <div>
                  <button className="flex flex-row justify-between w-full py-3">
                    <div className="flex flex-row items-center gap-2">
                      <FaRegUserCircle size={20} />
                      <p className="font-semibold">Airlines</p>
                    </div>
                    <div className="text-blue-600">
                      <BiChevronRight size={24} />
                    </div>
                  </button>
                </div>
                <div>
                  <button className="flex flex-row justify-between w-full py-3">
                    <div className="flex flex-row items-center gap-2">
                      <AiFillStar size={20} />
                      <p className="font-semibold">My Review</p>
                    </div>
                    <div className="text-blue-600">
                      <BiChevronRight size={24} />
                    </div>
                  </button>
                </div>
                <div>
                  <button className="flex flex-row justify-between w-full py-3">
                    <div className="flex flex-row items-center gap-2">
                      <AiTwotoneSetting size={20} />
                      <p className="font-semibold">Setting</p>
                    </div>
                    <div className="text-blue-600">
                      <BiChevronRight size={24} />
                    </div>
                  </button>
                </div>
                <div>
                  <button
                    className="flex flex-row justify-between w-full py-3"
                    onClick={logoutHandler}
                  >
                    <div className="flex flex-row items-center gap-2 text-red-600">
                      <FiLogOut size={20} />
                      <p className="font-semibold">Logout</p>
                    </div>
                    <div className="text-red-600">
                      <BiChevronRight size={24} />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* my booking */}
            <div className="sm:col-span-6 lg:col-span-9">
              {/* title my booking */}
              <div className="w-full bg-white p-4 mb-5 rounded-xl">
                <div className="text-blue-600 text-xs">PROFILE</div>
                <div className="w-full flex flex-row py-2">
                  <div>
                    <h1 className="font-semibold">PROFILE</h1>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-6">
                    <h1 className="text-md text-black font-semibold">
                      Contact
                    </h1>
                    {/* form */}
                    <div className="relative z-0 my-10">
                      <input
                        type="email"
                        id="email"
                        // onChange={(e) =>
                        //   setFormLogin({ ...formLogin, email: e.target.value })
                        // }
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="email"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email
                      </label>
                    </div>

                    <div className="relative z-0 my-10">
                      <input
                        type="number"
                        id="no-phone"
                        // onChange={(e) =>
                        //   setFormLogin({ ...formLogin, email: e.target.value })
                        // }
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="no-phone"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>
                  <div className="lg:col-span-6">
                    <h1 className="text-md text-black font-semibold">
                      Biodata
                    </h1>
                    {/* form biodata */}
                    <div className="relative z-0 my-10">
                      <input
                        type="text"
                        id="username"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="username"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Username
                      </label>
                    </div>
                    <div className="relative z-0 my-10">
                      <input
                        type="text"
                        id="city"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="city"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        City
                      </label>
                    </div>
                    <div className="relative z-0 my-10">
                      <input
                        type="text"
                        id="address"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="address"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Address
                      </label>
                    </div>
                    <div className="relative z-0 my-10">
                      <input
                        type="number"
                        id="post-code"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonetext-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="post-code"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Post Code
                      </label>
                    </div>
                    <div>
                      <Button type="submit" text="Save" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
