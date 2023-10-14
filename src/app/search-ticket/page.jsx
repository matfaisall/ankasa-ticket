"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoArrowSwitch } from "react-icons/go";
import { HiArrowsUpDown } from "react-icons/hi2";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaPlaneDeparture, FaWifi } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { PiSuitcaseRollingFill } from "react-icons/pi";
import RangeSlider from "react-range-slider-input";
import Image from "next/image";

import NavbarAuth from "@/components/navbar-auth/NavbarAuth";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

const SearchTicket = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_FLIGHT_API;

  const [dataFlight, setDataFlight] = useState([]);
  const [iconFacilities, setIconFacilities] = useState("");

  const [facilities, setFacilities] = useState("");
  const [airLineId, setAirLineId] = useState("");

  const [rangePrice, setRangePrice] = useState([0, 1000]);

  // filter facilities
  const filterFacilities = (event) => {
    const { value, checked } = event.target;
    const prevFacilities = facilities.split(",");
    const updateFacilities = checked
      ? [...prevFacilities, value]
      : [prevFacilities.filter((facility) => facility !== value)];

    const updateFacilitiesString = updateFacilities.join(",");

    const result = updateFacilitiesString.startsWith(",")
      ? updateFacilitiesString.substring(1)
      : updateFacilitiesString;

    console.log(result);
    setFacilities(result);
  };

  // filter airline
  const filterAirLineId = (event) => {
    const { value, checked } = event.target;
    const prevAirLineId = airLineId.split(",");
    const updateAirLineId = checked
      ? [...prevAirLineId, value]
      : prevAirLineId.filter((singleAirLine) => singleAirLine !== value);

    const updateAirLineIdString = updateAirLineId.join(",");
    const result = updateAirLineIdString.startsWith(",")
      ? updateAirLineIdString.substring(1)
      : updateAirLineIdString;
    console.log(result);
    setAirLineId(result);
  };

  const getDataTicket = async () => {
    const result = await axios.get(
      `${BASE_URL}/airlines/flight?facilities=${facilities}&airlineId=${airLineId}&minPrice=${rangePrice[0]}&maxPrice=${rangePrice[1]}`
    );
    console.log(result.data);
    setDataFlight(result.data);
    setIconFacilities(result.data.data);
  };

  useEffect(() => {
    getDataTicket();
  }, [facilities, airLineId, rangePrice]);

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
            {/* 
            <div className="border-b-2">
              <button className="flex flex-row justify-between w-full py-5">
                <p className="font-semibold">Transit</p>
                <div className="text-blue-600">
                  <IoIosArrowUp size={20} />
                </div>
              </button>

              <div className="flex flex-col">
                <div className="flex justify-between w-full items-center mb-4">
                  <label className="text-sm" htmlFor="direct">
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
                  <label className="text-sm" htmlFor="transit">
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
                  <label className="text-sm" htmlFor="transit2">
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
            */}
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
                  <label className="text-sm" htmlFor="luggage">
                    Luggage
                  </label>
                  <input
                    type="checkbox"
                    name="luggage"
                    value="1"
                    onChange={filterFacilities}
                    id="luggage"
                    className="w-4 h-4 rounded-sm"
                    checked={facilities.includes("1")}
                  />
                </div>
                <div className="flex flex-row justify-between w-full items-center mb-5">
                  <label className="text-sm" htmlFor="inflightmeal">
                    In-Flight Meal
                  </label>
                  <input
                    type="checkbox"
                    value="2"
                    name="inflightmeal"
                    onChange={filterFacilities}
                    id="inflightmeal"
                    className="w-4 h-4 rounded-sm"
                    checked={facilities.includes("2")}
                  />
                </div>
                <div className="flex flex-row justify-between w-full items-center mb-5">
                  <label className="text-sm" htmlFor="wifi">
                    Wi-fi
                  </label>
                  <input
                    type="checkbox"
                    name="wifi"
                    value="3"
                    onChange={filterFacilities}
                    id="wifi"
                    className="w-4 h-4 rounded-sm"
                    checked={facilities.includes("3")}
                  />
                </div>
              </div>
            </div>
            {/* Departure time */}
            {/* <div className="border-b-2">
              <button className="flex flex-row justify-between w-full py-5">
                <p className="font-semibold">Departure Time</p>
                <div className="text-blue-600">
                  <IoIosArrowUp size={20} />
                </div>
              </button>

              <div className="flex flex-col">
                <div className="flex justify-between w-full items-center mb-4">
                  <label className="text-sm" htmlFor="00-06">
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
                  <label className="text-sm" htmlFor="06-12">
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
                  <label className="text-sm" htmlFor="12-18">
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
                  <label className="text-sm" htmlFor="18-24">
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
            </div> */}
            {/*time arrived */}

            {/* <div className="border-b-2">
              <button className="flex flex-row justify-between w-full py-5">
                <p className="font-semibold">Time Arrived</p>
                <div className="text-blue-600">
                  <IoIosArrowUp size={20} />
                </div>
              </button>

              <div className="flex flex-col">
                <div className="flex justify-between w-full items-center mb-4">
                  <label className="text-sm" htmlFor="00-06">
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
                  <label className="text-sm" htmlFor="06-12">
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
                  <label className="text-sm" htmlFor="12-18">
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
                  <label className="text-sm" htmlFor="18-24">
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
            </div> */}

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
                  <label className="text-sm" htmlFor="singapure-airline">
                    Singapure Airlines
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="singapure-airline"
                    value="1"
                    className="w-4 h-4 rounded-sm"
                    onChange={filterAirLineId}
                    checked={airLineId.includes("1")}
                  />
                </div>
                <div className="flex justify-between w-full items-center mb-4">
                  <label className="text-sm" htmlFor="garuda-indoneisa">
                    Garuda Indonesia
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="garuda-indoneisa"
                    value="2"
                    className="w-4 h-4 rounded-sm"
                    onChange={filterAirLineId}
                    checked={airLineId.includes("2")}
                  />
                </div>
                <div className="flex justify-between w-full items-center mb-4">
                  <label className="text-sm" htmlFor="lion-air">
                    Lion Air
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="lion-air"
                    value="3"
                    className="w-4 h-4 rounded-sm"
                    onChange={filterAirLineId}
                    checked={airLineId.includes("3")}
                  />
                </div>
                <div className="flex justify-between w-full items-center mb-4">
                  <label className="text-sm" htmlFor="air-asia">
                    Air Asia
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="air-asia"
                    value="4"
                    className="w-4 h-4 rounded-sm"
                    onChange={filterAirLineId}
                    checked={airLineId.includes("4")}
                  />
                </div>
                <div className="flex justify-between w-full items-center mb-4">
                  <label className="text-sm" htmlFor="citilink">
                    CitiLink
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="citilink"
                    value="5"
                    className="w-4 h-4 rounded-sm"
                    onChange={filterAirLineId}
                    checked={airLineId.includes("5")}
                  />
                </div>
              </div>
            </div>

            {/* ticket price */}
            <div className="">
              <button className="flex flex-row justify-between w-full py-5">
                <p className="font-semibold">Ticket Price</p>
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
                <div className="flex w-100 justify-center">
                  <RangeSlider
                    min={0}
                    max={1000}
                    value={rangePrice}
                    onInput={setRangePrice}
                  />
                </div>
                <div className="flex justify-between w-full items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-400">{rangePrice[0]}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{rangePrice[1]}</p>
                  </div>
                </div>
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
          {dataFlight.data?.map((flightSchedule, index) => {
            const isLuggage = flightSchedule.facilities.includes("baggage");
            const isMeal = flightSchedule.facilities.includes("meal");
            const isWifi = flightSchedule.facilities.includes("wifi");

            return (
              <div className="mt-4" key={flightSchedule.code}>
                <div className="flex flex-col bg-white p-6 rounded-2xl gap-2 w-full">
                  <div className="w-full flex flex-row items-center gap-5">
                    <Image
                      // /image/garuda-indo.png
                      src={flightSchedule.photo}
                      width={90}
                      height={60}
                      alt={flightSchedule.name}
                    />
                    <p className="font-semibold text-sm text-gray-600">
                      {flightSchedule.name}
                    </p>
                  </div>

                  <div className="flex flex-row justify-between items-center">
                    <div className="w-fit">
                      <div className="flex flex-row justify-between py-3 gap-8 items-center">
                        <div className="text-left">
                          <h1 className="text-xl font-semibold text-black">
                            {flightSchedule.from.code}
                          </h1>
                          <p className="text-xs font-extralight text-gray-500">
                            {new Date(
                              flightSchedule.takeoff
                            ).toLocaleTimeString()}
                          </p>
                        </div>
                        <div className="text-gray-400">
                          <FaPlaneDeparture size={24} />
                        </div>
                        <div className="text-left">
                          <h1 className="text-xl font-semibold text-black">
                            {flightSchedule.to.code}
                          </h1>
                          <p className="text-xs font-extralight text-gray-500">
                            {new Date(
                              flightSchedule.landing
                            ).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-center w-fit text-gray-600 text-sm">
                      {flightSchedule.interval_time}
                      <br />
                      <span className="text-xs text-center">
                        ({flightSchedule.transit} transit)
                      </span>
                    </p>
                    <div className="flex flex-row gap-3">
                      {isLuggage && (
                        <div className="text-gray-400">
                          <PiSuitcaseRollingFill size={24} />
                        </div>
                      )}
                      {isMeal && (
                        <div className="text-gray-400">
                          <FaHamburger size={24} />
                        </div>
                      )}
                      {isWifi && (
                        <div className="text-gray-400">
                          <FaWifi size={24} />
                        </div>
                      )}
                    </div>
                    <p className="text-blue-600 font-medium">
                      $ {flightSchedule.price}{" "}
                      <span className="text-gray-600 text-sm">/pax</span>
                    </p>
                    <Link href="/my-booking">
                      <button className="bg-blue-600 text-white rounded-xl font-semibold py-2 px-10 shadow-md">
                        Select
                      </button>
                    </Link>
                  </div>

                  <button className="flex gap-3 items-center">
                    <p className="text-blue-600 font-normal">View Detail</p>
                    <div className="text-blue-600">
                      <IoIosArrowDown size={20} />
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
          {/* single ticket end */}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default SearchTicket;
