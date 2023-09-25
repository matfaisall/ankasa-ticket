"use client";
import React from "react";
import NavbarAuth from "@/components/navbar-auth/NavbarAuth";

import Image from "next/image";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

import { HiMapPin } from "react-icons/hi2";
import { FaRegUserCircle, FaPlaneDeparture } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { AiFillStar, AiTwotoneSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

import Link from "next/link";
import Footer from "@/components/footer/Footer";

const Profile = () => {
  const router = useRouter();
  const passangerName = localStorage?.getItem("name");

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
            localStorage.clear("access_token");
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
                      {passangerName || "faisal"}
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
                <div className="text-blue-600 text-xs">MY BOOKING</div>
                <div className="w-full flex flex-row justify-between pt-2">
                  <div>
                    <h1 className="font-semibold">My Booking</h1>
                  </div>
                  <div className="text-blue-600 text-sm">
                    <Link href="">Order History</Link>
                  </div>
                </div>
              </div>
              {/* card booking */}
              <div className="w-full bg-white p-4 mb-5 rounded-xl">
                <p className="text-black text-sm">
                  Monday, July 20, '20 - 12:33
                </p>

                <div className="flex flex-row justify-between items-center">
                  <div className="w-fit">
                    <div className="flex flex-row justify-between py-4 gap-6 items-center">
                      <div>
                        <h1 className="text-md font-semibold text-black">
                          IND
                        </h1>
                      </div>
                      <div className="text-gray-400">
                        <FaPlaneDeparture size={24} />
                      </div>
                      <div>
                        <h1 className="text-md font-semibold text-black">
                          JPN
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <p className="text-black text-xs font-light">
                    Garuda Indonesia, AB-221
                  </p>
                </div>
                <hr />

                <div className="flex flex-row justify-between pt-4 items-center">
                  <div className="flex flex-row gap-10 items-center">
                    <p className="text-sm text-gray-600">Status</p>
                    <Link href="#">
                      <button className="px-3 py-2 bg-orange-500 text-white rounded-md text-sm">
                        Waiting for payment
                      </button>
                    </Link>
                  </div>
                  <Link href="#">
                    <div className="flex flex-row items-center gap-2 text-blue-600">
                      <p className="text-sm">View Details</p>
                      <IoIosArrowDown />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-full bg-white p-4 mb-5 rounded-xl">
                <p className="text-black text-sm">
                  Monday, July 20, '20 - 12:33
                </p>

                <div className="flex flex-row justify-between items-center">
                  <div className="w-fit">
                    <div className="flex flex-row justify-between py-4 gap-6 items-center">
                      <div>
                        <h1 className="text-md font-semibold text-black">
                          IND
                        </h1>
                      </div>
                      <div className="text-gray-400">
                        <FaPlaneDeparture size={24} />
                      </div>
                      <div>
                        <h1 className="text-md font-semibold text-black">
                          JPN
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <p className="text-black text-xs font-light">
                    Garuda Indonesia, AB-221
                  </p>
                </div>
                <hr />

                <div className="flex flex-row justify-between pt-4 items-center">
                  <div className="flex flex-row gap-10 items-center">
                    <p className="text-sm text-gray-600">Status</p>
                    <Link href="#">
                      <button className="px-3 py-2 bg-orange-500 text-white rounded-md text-sm">
                        Waiting for payment
                      </button>
                    </Link>
                  </div>
                  <Link href="#">
                    <div className="flex flex-row items-center gap-2 text-blue-600">
                      <p className="text-sm">View Details</p>
                      <IoIosArrowDown />
                    </div>
                  </Link>
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
