import React from "react";
import { GoArrowSwitch } from "react-icons/go";
import { HiArrowsUpDown } from "react-icons/hi2";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaPlaneDeparture, FaWifi } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { PiSuitcaseRollingFill } from "react-icons/pi";
import Image from "next/image";

import NavbarAuth from "@/components/navbar-auth/NavbarAuth";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import MultiRangeSlider from "@/components/multi-range-slider/MultiRangeSlider";

const Ticket = () => {
  return (
    <>
      <NavbarAuth />
      <div className="bg-blue-600 rounded-b-2xl px-4 lg:px-16">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 relative">
          {/* <div className="absolute -z-10">
            <Image
              src="/image/plane-white.png"
              alt="Ankasa Ticket"
              width={100}
              height={100}
            />
          </div> */}
          <div className="w-fit flex flex-row gap-4 items-center">
            <div>
              <Image
                src="/image/plane-white.png"
                alt="Ankasa Ticket"
                width={50}
                height={50}
              />
            </div>
            <div>
              <div className="flex flex-row justify-between py-1">
                <p className="text-white text-xs font-light">From</p>
                <p className="text-white text-xs font-light">To</p>
              </div>
              <div className="flex flex-row justify-between py-1 gap-8">
                <div className="text-white text-md">
                  <p>Medan (IDN)</p>
                </div>
                <div className="flex items-center text-white">
                  <GoArrowSwitch />
                </div>
                <div className="text-white text-md">
                  <p>Tokyo (JPN)</p>
                </div>
              </div>
              <p className="text-white text-xs font-light">
                Monday, 20 July 20 <span>●</span> 6 Passanger <span>●</span>{" "}
                Economy
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-white text-md">
              <Link href="#">Change Search</Link>
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 gap-6 w-full flex flex-row px-4 lg:px-16">
        <aside className="w-[30%] py-4">
          <div className="flex justify-between">
            <div>
              <h1 className="font-semibold">Filter</h1>
            </div>
            <button>
              <p className="text-blue-600 text-sm">Reset</p>
            </button>
          </div>

          {/* Fiilter */}
          <div className="w-full p-4 mt-4 bg-white rounded-xl">
            {/* transit */}
            <div className="border-b-2">
              <button className="flex flex-row justify-between w-full py-5">
                <p className="font-semibold">Transit</p>
                <div className="text-blue-600">
                  <IoIosArrowUp size={20} />
                </div>
              </button>

              <div className="flex flex-col">
                <div className="flex justify-between w-full items-center mb-4">
                  <label className="text-sm" for="direct">
                    Direct
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="direct"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
                <div className="flex flex-row justify-between w-full items-center mb-5">
                  <label className="text-sm" for="transit">
                    Transit
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="transit"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
                <div className="flex flex-row justify-between w-full items-center mb-5">
                  <label className="text-sm" for="transit2">
                    Transit 2+
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="transit2"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
              </div>
            </div>
            {/* facilities */}
            <div className="border-b-2">
              <button className="flex flex-row justify-between w-full py-5">
                <p className="font-semibold">Facilities</p>
                <div className="text-blue-600">
                  <IoIosArrowUp size={20} />
                </div>
              </button>

              <div className="flex flex-col">
                <div className="flex justify-between w-full items-center mb-4">
                  <label className="text-sm" for="luggage">
                    Luggage
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="luggage"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
                <div className="flex flex-row justify-between w-full items-center mb-5">
                  <label className="text-sm" for="inflightmeal">
                    In-Flight Meal
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="inflightmeal"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
                <div className="flex flex-row justify-between w-full items-center mb-5">
                  <label className="text-sm" for="wifi">
                    Wi-fi
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="wifi"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
              </div>
            </div>
            {/* Departure time */}
            <div className="border-b-2">
              <button className="flex flex-row justify-between w-full py-5">
                <p className="font-semibold">Departure Time</p>
                <div className="text-blue-600">
                  <IoIosArrowUp size={20} />
                </div>
              </button>

              <div className="flex flex-col">
                <div className="flex justify-between w-full items-center mb-4">
                  <label className="text-sm" for="00-06">
                    00:00 - 06:00
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="00-06"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
                <div className="flex flex-row justify-between w-full items-center mb-5">
                  <label className="text-sm" for="06-12">
                    06:00 -12:00
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="06-12"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
                <div className="flex flex-row justify-between w-full items-center mb-5">
                  <label className="text-sm" for="12-18">
                    12:00 - 18:00
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="12-18"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
                <div className="flex flex-row justify-between w-full items-center mb-5">
                  <label className="text-sm" for="18-24">
                    18:00 - 24:00
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="18-24"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
              </div>
            </div>
            {/*time arrived */}
            <div className="border-b-2">
              <button className="flex flex-row justify-between w-full py-5">
                <p className="font-semibold">Time Arrived</p>
                <div className="text-blue-600">
                  <IoIosArrowUp size={20} />
                </div>
              </button>

              <div className="flex flex-col">
                <div className="flex justify-between w-full items-center mb-4">
                  <label className="text-sm" for="00-06">
                    00:00 - 06:00
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="00-06"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
                <div className="flex flex-row justify-between w-full items-center mb-5">
                  <label className="text-sm" for="06-12">
                    06:00 -12:00
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="06-12"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
                <div className="flex flex-row justify-between w-full items-center mb-5">
                  <label className="text-sm" for="12-18">
                    12:00 - 18:00
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="12-18"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
                <div className="flex flex-row justify-between w-full items-center mb-5">
                  <label className="text-sm" for="18-24">
                    18:00 - 24:00
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="18-24"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
              </div>
            </div>

            {/* Air lines */}
            <div className="border-b-2">
              <button className="flex flex-row justify-between w-full py-5">
                <p className="font-semibold">Airlines</p>
                <div className="text-blue-600">
                  <IoIosArrowUp size={20} />
                </div>
              </button>

              <div className="flex flex-col">
                <div className="flex justify-between w-full items-center mb-4">
                  <label className="text-sm" for="garuda-indoneisa">
                    Garuda Indonesia
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="garuda-indoneisa"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
                <div className="flex flex-row justify-between w-full items-center mb-5">
                  <label className="text-sm" for="air-asia">
                    Air Asia
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="air-asia"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
                <div className="flex flex-row justify-between w-full items-center mb-5">
                  <label className="text-sm" for="lion-air">
                    Lion Air
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="lion-air"
                    className="w-4 h-4 rounded-sm"
                  />
                </div>
              </div>
            </div>

            {/* ticket price */}
            <div className="">
              <button className="flex flex-row justify-between w-full py-5">
                <p className="font-semibold">Airlines</p>
                <div className="text-blue-600">
                  <IoIosArrowUp size={20} />
                </div>
              </button>

              <div className="flex flex-col">
                <div className="flex justify-between w-full items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Lowest</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Highest</p>
                  </div>
                </div>
                {/* range */}
                <MultiRangeSlider min={0} max={1000} />
              </div>
            </div>
          </div>
        </aside>

        <div className="w-[70%] py-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <p className="font-semibold pr-1">Select Ticket </p>
              <span className="font-light text-xs">(6 flight found)</span>
            </div>
            <button>
              <div className="flex flex-row gap-2 items-center ">
                <p className="text-sm">Sort By</p>
                <HiArrowsUpDown />
              </div>
            </button>
          </div>

          {/* ticket */}
          <div className="mt-4">
            <div className="flex flex-col bg-white p-6 rounded-2xl gap-2 w-full">
              <div className="w-full flex flex-row items-center gap-5">
                <Image src="/image/garuda-indo.png" width={90} height={60} />
                <p className="font-semibold text-sm text-gray-600">
                  Garuda Indonesia
                </p>
              </div>

              <div className="flex flex-row justify-between items-center">
                <div className="w-fit">
                  <div className="flex flex-row justify-between py-3 gap-8 items-center">
                    <div className="text-left">
                      <h1 className="text-xl font-semibold text-black">IDN</h1>
                      <p className="text-xs font-extralight text-gray-500">
                        12.33
                      </p>
                    </div>
                    <div className="text-gray-400">
                      <FaPlaneDeparture size={24} />
                    </div>
                    <div className="text-left">
                      <h1 className="text-xl font-semibold text-black">JPN</h1>
                      <p className="text-xs font-extralight text-gray-500">
                        15.21
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center w-fit text-gray-600 text-">
                  3 hours 11 minutes
                  <br />
                  <span className="text-xs text-center">(1 transit)</span>
                </p>
                <div className="flex flex-row gap-3">
                  <div className="text-gray-400">
                    <PiSuitcaseRollingFill size={24} />
                  </div>
                  <div className="text-gray-400">
                    <FaHamburger size={24} />
                  </div>
                  <div className="text-gray-400">
                    <FaWifi size={24} />
                  </div>
                </div>
                <p className="text-blue-600 font-medium">
                  $ 214,00 <span className="text-gray-600 text-sm">/pax</span>
                </p>
                <button className="bg-blue-600 text-white rounded-xl font-semibold py-2 px-10 shadow-md">
                  Select
                </button>
              </div>

              <button className="flex gap-3 items-center">
                <p className="text-blue-600 font-normal">View Detail</p>
                <div className="text-blue-600">
                  <IoIosArrowDown size={20} />
                </div>
              </button>
            </div>
          </div>
          {/* single ticket end */}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Ticket;
